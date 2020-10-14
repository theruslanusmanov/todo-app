import Component from '../../lib/Component'
import './home.component.scss'
import Renderer from '../../lib/Renderer'
import SectionTitleComponent
  from '../../ui/section-title/section-title.component'
import TaskItemComponent from '../../ui/task-item/task-item.component'
import DARK_THEME_VAR from '../../services/theme.service'

class HomeComponent extends Component {

  afterRender() {
    document.getElementById('new').addEventListener('click', () => {
      window.location.pathname = '/new-task';
    })
  }

  render () {
    return `
      <div id="new" class="new ${window[DARK_THEME_VAR] ? 'dark' : ''}">
        New...
      </div>
      <section>
        ${Renderer.render(new SectionTitleComponent('Today'), this.id)}
        ${Renderer.render(new TaskItemComponent('Title 1'), this.id)}
        ${Renderer.render(new TaskItemComponent('Title 2'), this.id)}
      </section>      
      <section>
        ${Renderer.render(new SectionTitleComponent('Favourites'), this.id)}
        ${Renderer.render(new TaskItemComponent('Title 1'), this.id)}
        ${Renderer.render(new TaskItemComponent('Title 2'), this.id)}
      </section>
      <section>
        ${Renderer.render(new SectionTitleComponent('Soon'), this.id)}
        ${Renderer.render(new TaskItemComponent('Title 1'), this.id)}
        ${Renderer.render(new TaskItemComponent('Title 2'), this.id)}
      </section>
      <section>
        ${Renderer.render(new SectionTitleComponent('Past'), this.id)}
        ${Renderer.render(new TaskItemComponent('Title 1'), this.id)}
        ${Renderer.render(new TaskItemComponent('Title 2'), this.id)}
      </section>
     `
  }
}

export default HomeComponent
