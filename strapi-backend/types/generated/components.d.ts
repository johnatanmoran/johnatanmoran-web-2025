import type { Schema, Struct } from '@strapi/strapi';

export interface GlobalTecnologia extends Struct.ComponentSchema {
  collectionName: 'components_global_tecnologia';
  info: {
    description: 'Reusable technology/tag for projects or services';
    displayName: 'Tecnologia';
    icon: 'laptop-code';
  };
  attributes: {
    icono: Schema.Attribute.Media;
    nombre: Schema.Attribute.String & Schema.Attribute.Required;
    tipo: Schema.Attribute.Enumeration<
      [
        'lenguaje',
        'framework',
        'herramienta',
        'base_de_datos',
        'dise\u00F1o',
        'otro',
      ]
    >;
  };
}

export interface UnoUno extends Struct.ComponentSchema {
  collectionName: 'components_uno_unos';
  info: {
    displayName: 'Uno';
    icon: 'crown';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'global.tecnologia': GlobalTecnologia;
      'uno.uno': UnoUno;
    }
  }
}
