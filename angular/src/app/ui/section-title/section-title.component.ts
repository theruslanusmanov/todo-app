import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ThemeService } from '../../services/theme/theme.service';

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionTitleComponent implements OnInit {
  readonly isDark$: BehaviorSubject<boolean> = this.themeService.isDark$;

  @Input() title: string;
  @Input() clickable = false;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
  }
}
