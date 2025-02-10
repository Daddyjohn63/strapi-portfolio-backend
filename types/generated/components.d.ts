import type { Schema, Attribute } from '@strapi/strapi';

export interface WebDesignProcessFlowWebDesignCard extends Schema.Component {
  collectionName: 'components_web_design_process_flow_web_design_cards';
  info: {
    displayName: 'web design card';
    icon: 'chartCircle';
    description: '';
  };
  attributes: {
    time: Attribute.String & Attribute.Required;
    subheading: Attribute.String & Attribute.Required;
    mainheading: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    bullet_one: Attribute.String & Attribute.Required;
    bullet_two: Attribute.String & Attribute.Required;
    bullet_three: Attribute.String;
    bullet_four: Attribute.String;
    bullet_five: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'web-design-process-flow.web-design-card': WebDesignProcessFlowWebDesignCard;
    }
  }
}
