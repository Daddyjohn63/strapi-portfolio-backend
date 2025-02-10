import type { Schema, Struct } from '@strapi/strapi';

export interface WebDesignProcessFlowWebDesignCard
  extends Struct.ComponentSchema {
  collectionName: 'components_web_design_process_flow_web_design_cards';
  info: {
    description: '';
    displayName: 'web design card';
    icon: 'chartCircle';
  };
  attributes: {
    bullet_five: Schema.Attribute.String;
    bullet_four: Schema.Attribute.String;
    bullet_one: Schema.Attribute.String & Schema.Attribute.Required;
    bullet_three: Schema.Attribute.String;
    bullet_two: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    mainheading: Schema.Attribute.String & Schema.Attribute.Required;
    subheading: Schema.Attribute.String & Schema.Attribute.Required;
    time: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'web-design-process-flow.web-design-card': WebDesignProcessFlowWebDesignCard;
    }
  }
}
