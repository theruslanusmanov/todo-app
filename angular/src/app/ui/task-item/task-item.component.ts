import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { BehaviorSubject } from 'rxjs';
import { ThemeService } from '../../services/theme/theme.service';
import { TasksStorageService } from '../../services/tasks-storage/tasks-storage.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Input() isActive: boolean;
  isDark$: BehaviorSubject<boolean> = this.themeService.isDark$;
  remaining: string;

  constructor(
    private themeService: ThemeService,
    private tasksStorage: TasksStorageService
  ) { }

  ngOnInit(): void {
  }

  onFavorite(): void {
    this.task.isFavorite = !this.task.isFavorite;
    this.tasksStorage.updateTask(this.task);
  }

  onRemove(): void {
    this.task.isArchived = true;
    this.tasksStorage.updateTask(this.task);
  }

  /**
   * Calculates remaining time of task.
   */
  onTime(event: any): void {
    event.stopPropagation();
    this.isActive = true;

    this.remaining = `Remaining ${this.task.date}...`;
  }

  onBack(event: any): void {
    event.stopPropagation();
    this.isActive = false;
  }

  onRestore(): void {
    this.task.isArchived = false;
    this.tasksStorage.updateTask(this.task);
  }
}
