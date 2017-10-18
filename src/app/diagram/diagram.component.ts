import { Component, OnInit } from '@angular/core';
import { DiagramScheme } from '../../models/diagram/DiagramScheme';
import { DiagramLinkType } from '../../models/diagram/DiagramLinkType';

@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.less']
})
export class DiagramComponent implements OnInit {
  scheme: DiagramScheme;

  constructor() { }

  ngOnInit() {
    this.scheme = {
      name: 'MyScheme',
      objects: [
        {
          name: 'post',
          properties: [
            {
              name: 'title',
              type: 'string',
              link: null
            },
            {
              name: 'body',
              type: 'string',
              link: null
            },
            {
              name: 'author',
              type: 'string',
              link: null
            }
          ]
        },
        {
          name: 'author',
          properties: [
            {
              name: 'name',
              type: 'string',
              link: null
            },
            {
              name: 'age',
              type: 'string',
              link: null
            },
            {
              name: 'posts',
              type: 'object',
              link: {
                to: 'post',
                type: DiagramLinkType.ManyToMany
              }
            }
          ]
        }
      ]
    };
  }

}
