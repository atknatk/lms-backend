import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksCtaCommandLine extends Schema.Component {
  collectionName: 'components_blocks_cta_command_lines';
  info: {
    displayName: 'CtaCommandLine';
    description: '';
  };
  attributes: {
    theme: Attribute.Enumeration<['primary', 'secondary', 'muted']> &
      Attribute.DefaultTo<'primary'>;
    title: Attribute.String;
    text: Attribute.String;
    commandLine: Attribute.Text;
  };
}

export interface BlocksCta extends Schema.Component {
  collectionName: 'components_blocks_ctas';
  info: {
    displayName: 'Cta';
    description: '';
  };
  attributes: {
    theme: Attribute.Enumeration<['primary', 'secondary', 'muted']> &
      Attribute.Required &
      Attribute.DefaultTo<'primary'>;
    title: Attribute.String;
    text: Attribute.String;
  };
}

export interface ElementsCounter extends Schema.Component {
  collectionName: 'components_elements_counters';
  info: {
    displayName: 'Counter';
  };
  attributes: {
    number: Attribute.String;
    title: Attribute.String;
  };
}

export interface ElementsPricingPlan extends Schema.Component {
  collectionName: 'components_elements_pricing_plans';
  info: {
    displayName: 'Pricing plan';
    description: '';
  };
  attributes: {
    type: Attribute.String;
    price: Attribute.Decimal;
    isRecommended: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    product_features: Attribute.Relation<
      'elements.pricing-plan',
      'oneToMany',
      'api::product-feature.product-feature'
    >;
    planDescrioption: Attribute.String;
    image: Attribute.Media;
  };
}

export interface LinksButtonLink extends Schema.Component {
  collectionName: 'components_links_button_links';
  info: {
    displayName: 'ButtonLink';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
    text: Attribute.String & Attribute.Required;
    type: Attribute.Enumeration<['primary', 'secondary', 'outline']>;
    newTab: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
  };
}

export interface LinksSocialLink extends Schema.Component {
  collectionName: 'components_links_social_links';
  info: {
    displayName: 'Social Link';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
    newTab: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
    text: Attribute.String;
    social: Attribute.Enumeration<
      ['YOUTUBE', 'TWITTER', 'INSTAGRAM', 'LINKEDIN', 'FACEBOOK', 'WEBSITE']
    > &
      Attribute.Required;
  };
}

export interface MetaMetadata extends Schema.Component {
  collectionName: 'components_meta_metadata';
  info: {
    displayName: 'Metadata';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.String & Attribute.Required;
  };
}

export interface SectionsHero extends Schema.Component {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    masterHead: Attribute.String;
    masterHeadTitle: Attribute.String;
    masterHeadDescription: Attribute.String;
    masterLinks: Attribute.Component<'links.button-link', true>;
    featureIconList: Attribute.Component<'shared.feature-icon-list', true>;
    heroImage: Attribute.Media & Attribute.Required;
  };
}

export interface SectionsPricing extends Schema.Component {
  collectionName: 'components_sections_pricings';
  info: {
    displayName: 'Pricing';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    plans: Attribute.Component<'elements.pricing-plan', true>;
    yearly_discount_percentage: Attribute.Integer & Attribute.Required;
  };
}

export interface SectionsTestimonial extends Schema.Component {
  collectionName: 'components_sections_testimonials';
  info: {
    displayName: 'Testimonial';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    text: Attribute.String;
    testimonials: Attribute.Relation<
      'sections.testimonial',
      'oneToMany',
      'api::testimonial.testimonial'
    >;
    counters: Attribute.Component<'elements.counter', true>;
  };
}

export interface SharedButton extends Schema.Component {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    link: Attribute.Component<'shared.link'> & Attribute.Required;
    iconClass: Attribute.String & Attribute.Required;
  };
}

export interface SharedCard extends Schema.Component {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.String;
    image: Attribute.Media;
  };
}

export interface SharedComment extends Schema.Component {
  collectionName: 'components_shared_comments';
  info: {
    displayName: 'Comment';
    description: '';
  };
  attributes: {
    content: Attribute.Text;
  };
}

export interface SharedFeatureIconList extends Schema.Component {
  collectionName: 'components_shared_feature_icon_lists';
  info: {
    displayName: 'FeatureIconList';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface SharedFeaturesCheck extends Schema.Component {
  collectionName: 'components_shared_features_checks';
  info: {
    displayName: 'FeaturesCheck';
  };
  attributes: {
    text: Attribute.String;
  };
}

export interface SharedFooterColumns extends Schema.Component {
  collectionName: 'components_shared_footer_columns';
  info: {
    displayName: 'FooterColumns';
  };
  attributes: {
    links: Attribute.Component<'shared.link', true>;
  };
}

export interface SharedHeader extends Schema.Component {
  collectionName: 'components_shared_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    theme: Attribute.Enumeration<['primary', 'secondary', 'muted']> &
      Attribute.DefaultTo<'primary'>;
    label: Attribute.String;
    title: Attribute.String;
  };
}

export interface SharedImage extends Schema.Component {
  collectionName: 'components_shared_images';
  info: {
    displayName: 'Image';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    width: Attribute.Integer & Attribute.Required;
    height: Attribute.Integer;
    description: Attribute.String;
  };
}

export interface SharedLink extends Schema.Component {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'link';
    description: '';
  };
  attributes: {
    href: Attribute.String & Attribute.Required;
    label: Attribute.String & Attribute.Required;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.cta-command-line': BlocksCtaCommandLine;
      'blocks.cta': BlocksCta;
      'elements.counter': ElementsCounter;
      'elements.pricing-plan': ElementsPricingPlan;
      'links.button-link': LinksButtonLink;
      'links.social-link': LinksSocialLink;
      'meta.metadata': MetaMetadata;
      'sections.hero': SectionsHero;
      'sections.pricing': SectionsPricing;
      'sections.testimonial': SectionsTestimonial;
      'shared.button': SharedButton;
      'shared.card': SharedCard;
      'shared.comment': SharedComment;
      'shared.feature-icon-list': SharedFeatureIconList;
      'shared.features-check': SharedFeaturesCheck;
      'shared.footer-columns': SharedFooterColumns;
      'shared.header': SharedHeader;
      'shared.image': SharedImage;
      'shared.link': SharedLink;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
