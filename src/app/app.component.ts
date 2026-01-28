import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  link: string;
  technologies: string[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Gustavo Zumba';
  
  socialLinks = {
    linkedin: 'https://www.linkedin.com/in/gustavo-zumba-14ba1331b/',
    github: 'https://github.com/fritute',
    instagram: 'https://www.instagram.com/gusta_zumba/'
  };

  about = 'Sou um desenvolvedor iniciante na área de tecnologia, recém-formado no Senai Jandira em Desenvolvimento de Sistemas. Estou entusiasmado em começar minha jornada profissional e aplicar os conhecimentos que adquiri durante minha formação. Tenho grande interesse em aprender e crescer na área de desenvolvimento, especialmente em Front End e Back End, e estou sempre buscando novos desafios e oportunidades para expandir minhas habilidades.';

  objective = 'Como desenvolvedor iniciante, busco oportunidades para ingressar na área de tecnologia, onde posso aplicar e expandir meus conhecimentos em programação. Estou focado em desenvolver minhas habilidades em Front End e Back End, banco de dados e outras tecnologias modernas, sempre com dedicação e vontade de aprender.';

  skills = {
    frontend: ['React', 'TypeScript', 'Tailwind', 'Angular'],
    backend: ['Node.js', 'Python', 'PHP', 'Ruby on Rails', 'Prisma', 'API Rest'],
    mobile: ['Kotlin', 'Jetpack Compose'],
    management: ['Scrum', 'Kanban', 'Trello', 'Azure']
  };

  education = {
    course: 'Desenvolvimento de Sistemas',
    institution: 'Senai Jandira',
    period: '2024-2025',
    highSchool: 'Ensino médio completo'
  };

  extracurricular = [
    'Robótica Colégio Inovação (2019 - 2022)',
    'Ensino básico de computação (2018 - 2019)',
    'Inglês Básico Brasil Training'
  ];

  competencies = [
    'Liderança',
    'Comunicativo',
    'Raciocínio lógico',
    'Organização e planejamento',
    'Aprendizado Rápido'
  ];

  projects: Project[] = [
    {
      title: 'FACILITA',
      description: 'Plataforma web inovadora voltada para delivery e prestação de serviços, com forte foco em acessibilidade, inclusão digital e impacto social. Desenvolvido durante o TCC no SENAI Jandira.',
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:7421325456198709248/',
      technologies: ['React', 'TypeScript', 'TailwindCSS', 'Leaflet', 'WebSockets', 'Azure']
    },
    {
      title: 'Mapa da Desigualdade - Cinema RMSP',
      description: 'Mapa interativo mostrando a distribuição de cinemas na região metropolitana de São Paulo.',
      link: 'https://mapa-zumba.vercel.app/',
      technologies: ['React', 'TypeScript', 'Mapas Interativos']
    },
    {
      title: 'Razões Trigonométricas',
      description: 'Site educacional sobre funções trigonométricas recíprocas: cossecante, secante e cotangente.',
      link: 'https://fritute.github.io/razoes_trigonometricas/',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Matemática']
    },
    {
      title: 'Dungeons & Dragons',
      description: 'Site informativo sobre o jogo de RPG Dungeons & Dragons, com informações sobre classes, feitiços e criaturas.',
      link: 'https://fritute.github.io/dungeons-and-dragons/',
      technologies: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'API Filmes',
      description: 'Aplicação para pesquisa de filmes em inglês, exibindo informações relacionadas aos filmes encontrados.',
      link: 'https://fritute.github.io/filmes_api/',
      technologies: ['HTML', 'CSS', 'JavaScript', 'API']
    }
  ];

  currentYear = new Date().getFullYear();
}
