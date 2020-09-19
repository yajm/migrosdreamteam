import { Injectable } from '@angular/core';
import { Product } from '../../purchase/models/product';
import { ProductInfo } from '../models/product-info';

@Injectable()
export class ProductStateService {
  public products: Product[] = [
    {
      artikelID: 104223700000,
      menge: 1,
    },
    {
      artikelID: 106050000000,
      menge: 1,
    },
    {
      artikelID: 106530800000,
      menge: 1,
    },
    {
      artikelID: 204008500000,
      menge: 2,
    },
    {
      artikelID: 204150000000,
      menge: 1,
    },
    {
      artikelID: 212380400000,
      menge: 2,
    },
    {
      artikelID: 233000182000,
      menge: 0.138,
    },
    {
      artikelID: 236055600000,
      menge: 0.202,
    },
    {
      artikelID: 236055900000,
      menge: 0.208,
    },
    {
      artikelID: 274401204100,
      menge: 0.595,
    },
    {
      artikelID: 274502501000,
      menge: 1.159,
    },
    {
      artikelID: 277107908400,
      menge: 1,
    },
    {
      artikelID: 702920200040,
      menge: 2,
    },
  ];

  private info = {
    id: '106050000000',
    language: 'de',
    name: 'Bon Chef Tomaten',
    names: {
      name: 'Bon Chef Tomaten',
    },
    slug: 'bon-chef-tomaten',
    boss_number: '011111080110',
    status: {
      id: 'available',
      seasonal: false,
      pim_status: '03',
    },
    tags: [
      'source-pim',
      'migipedia',
      'source-qim-origins',
      'validity-range-not-set',
      'source-qim-allergens',
      'source-qim-fooddeclaration',
      'source-qim-nutritionfacts',
      'view-browse-partial',
      'view-browse-all-retailers-partial',
    ],
    is_variant: false,
    gtins: ['7613269297239', '7610121300120'],
    brand: {
      id: '652',
      name: 'Bon Chef',
      slug: 'bon-chef',
      image: {
        original:
          'https://image.migros.ch/original/19823c12a870ef747fb91c2ebd0a6c10084f3c81/bon-chef.jpg',
        stack:
          'https://image.migros.ch/{stack}/19823c12a870ef747fb91c2ebd0a6c10084f3c81/bon-chef.jpg',
      },
    },
    labels: [
      {
        id: 'L57',
        name: 'V-vegan',
        slug: 'v-vegan',
        image: {
          original:
            'https://image.migros.ch/original/9425b8ea6312342ddd2d0dc87e65567c88e1b757/v-vegan.jpg',
          stack:
            'https://image.migros.ch/{stack}/9425b8ea6312342ddd2d0dc87e65567c88e1b757/v-vegan.jpg',
        },
      },
    ],
    categories: [
      {
        code: 'BeSS_0101140901',
        name: 'Suppen',
        slug:
          'supermarkt/lebensmittel/pasta-zutaten-konserven/suppen-saucen-bouillon/suppen',
        visible: true,
        title: 'Suppen in Ihrer Migros kaufen',
        parent_code: 'BeSS_01011409',
        image: {
          original:
            'https://image.migros.ch/original/5e42f21d72f75d363cf04979b8d573688c090e6b/suppen.jpg',
          stack:
            'https://image.migros.ch/{stack}/5e42f21d72f75d363cf04979b8d573688c090e6b/suppen.jpg',
        },
        level: 5,
      },
      {
        code: 'BeSS_01011409',
        name: 'Suppen, Saucen & Bouillon',
        slug:
          'supermarkt/lebensmittel/pasta-zutaten-konserven/suppen-saucen-bouillon',
        visible: true,
        title: 'Bouillon in Ihrer Migros kaufen',
        parent_code: 'BeSS_010114',
        image: {
          original:
            'https://image.migros.ch/original/5f7779de5b06c3e5051c0ccdb81a414859a26cf5/suppen-saucen-bouillon.jpg',
          stack:
            'https://image.migros.ch/{stack}/5f7779de5b06c3e5051c0ccdb81a414859a26cf5/suppen-saucen-bouillon.jpg',
        },
        level: 4,
      },
      {
        code: 'BeSS_010114',
        name: 'Pasta, Zutaten & Konserven',
        slug: 'supermarkt/lebensmittel/pasta-zutaten-konserven',
        visible: true,
        title: 'Pasta aus Ihrer Migros: alles rund um Teigwaren',
        parent_code: 'BeSS_0101',
        image: {
          original:
            'https://image.migros.ch/original/6d0964bbb34b8e041ba4d74fc0c90b149907f46a/pasta-zutaten-konserven.jpg',
          stack:
            'https://image.migros.ch/{stack}/6d0964bbb34b8e041ba4d74fc0c90b149907f46a/pasta-zutaten-konserven.jpg',
        },
        level: 3,
      },
      {
        code: 'BeSS_0101',
        name: 'Lebensmittel',
        slug: 'supermarkt/lebensmittel',
        visible: true,
        title:
          'Lebensmittel aus Ihrer Migros: hochwertige Produkte, ausgewogener Genuss',
        parent_code: 'BeSS_01',
        image: {
          original:
            'https://image.migros.ch/original/c4c714b236338d5b9a042dd7dd2457b7e8604696/lebensmittel.jpg',
          stack:
            'https://image.migros.ch/{stack}/c4c714b236338d5b9a042dd7dd2457b7e8604696/lebensmittel.jpg',
        },
        level: 2,
      },
      {
        code: 'BeSS_01',
        name: 'Supermarkt',
        slug: 'supermarkt',
        visible: true,
        parent_code: 'root',
        level: 1,
      },
    ],
    additional_categories: [
      [
        {
          code: 'AMIG_CAT_Suppen_SuppenBouillon_Grundnahrungsmittel',
          name: 'Suppen',
          slug: 'amigos/grundnahrungsmittel/suppen-bouillon/suppen',
          visible: true,
          parent_code: 'AMIG_CAT_SuppenBouillon_Grundnahrungsmittel',
          level: 4,
        },
        {
          code: 'AMIG_CAT_SuppenBouillon_Grundnahrungsmittel',
          name: 'Suppen & Bouillon',
          slug: 'amigos/grundnahrungsmittel/suppen-bouillon',
          visible: true,
          parent_code: 'AMIG_CAT_Grundnahrungsmittel',
          level: 3,
        },
        {
          code: 'AMIG_CAT_Grundnahrungsmittel',
          name: 'Grundnahrungsmittel',
          slug: 'amigos/grundnahrungsmittel',
          visible: true,
          parent_code: 'BeSS_96',
          level: 2,
        },
        {
          code: 'BeSS_96',
          name: 'aMigos!',
          slug: 'amigos',
          visible: true,
          parent_code: 'root',
          level: 1,
        },
      ],
    ],
    nutrition_facts: {
      standard: {
        nutrients: [
          {
            code: 'PIM_NUT_ENERGIE',
            name: 'Energie',
            pictogram_name: 'Energie',
            category: 'BIG9',
            quantity: 106,
            nutrition_operator: '=',
            quantity_unit: 'kJ',
            quantity_alternate: 25,
            quantity_alternate_unit: 'kcal',
          },
          {
            code: 'PIM_NUT_FETT',
            name: 'Fett',
            pictogram_name: 'Fett',
            category: 'BIG9',
            quantity: 0.5,
            nutrition_operator: '<',
            quantity_unit: 'g',
          },
          {
            code: 'PIM_NUT_FETT_GES',
            name: 'davon gesättigte Fettsäuren',
            pictogram_name: 'gesättigte Fettsäuren',
            category: 'BIG9',
            quantity: 0,
            nutrition_operator: '=',
            quantity_unit: 'g',
          },
          {
            code: 'PIM_NUT_KOHLENHY',
            name: 'Kohlenhydrate',
            category: 'BIG9',
            quantity: 4.7,
            nutrition_operator: '=',
            quantity_unit: 'g',
          },
          {
            code: 'PIM_NUT_ZUCKER',
            name: 'davon Zucker',
            pictogram_name: 'Zuckerarten',
            category: 'BIG9',
            quantity: 2.9,
            nutrition_operator: '=',
            quantity_unit: 'g',
          },
          {
            code: 'PIM_NUT_GES_BALL',
            name: 'Ballaststoffe',
            category: 'BIG9',
            quantity: 0.6,
            nutrition_operator: '=',
            quantity_unit: 'g',
          },
          {
            code: 'PIM_NUT_PROTEINE',
            name: 'Eiweiss',
            category: 'BIG9',
            quantity: 0.8,
            nutrition_operator: '=',
            quantity_unit: 'g',
          },
          {
            code: 'PIM_NUT_KOCHSALZ',
            name: 'Salz',
            pictogram_name: 'Salz',
            category: 'BIG9',
            quantity: 0.83,
            nutrition_operator: '=',
            quantity_unit: 'g',
          },
        ],
        base_quantity: 100,
        base_unit: 'ml',
      },
      portion: {
        nutrients: [
          {
            code: 'PIM_NUT_ENERGIE',
            name: 'Energie',
            pictogram_name: 'Energie',
            category: 'BIG9',
            quantity: 264,
            rda_percent: 3,
            rda_percent_operator: '=',
            nutrition_operator: '=',
            quantity_unit: 'kJ',
            quantity_alternate: 63,
            quantity_alternate_unit: 'kcal',
          },
          {
            code: 'PIM_NUT_FETT',
            name: 'Fett',
            pictogram_name: 'Fett',
            category: 'BIG9',
            quantity: 0.5,
            rda_percent: 1,
            rda_percent_operator: '=',
            nutrition_operator: '=',
            quantity_unit: 'g',
          },
          {
            code: 'PIM_NUT_FETT_GES',
            name: 'davon gesättigte Fettsäuren',
            pictogram_name: 'gesättigte Fettsäuren',
            category: 'BIG9',
            quantity: 0,
            rda_percent: 0,
            rda_percent_operator: '=',
            nutrition_operator: '=',
            quantity_unit: 'g',
          },
          {
            code: 'PIM_NUT_KOHLENHY',
            name: 'Kohlenhydrate',
            category: 'BIG9',
            quantity: 12,
            rda_percent: 5,
            rda_percent_operator: '=',
            nutrition_operator: '=',
            quantity_unit: 'g',
          },
          {
            code: 'PIM_NUT_ZUCKER',
            name: 'davon Zucker',
            pictogram_name: 'Zuckerarten',
            category: 'BIG9',
            quantity: 7.3,
            rda_percent: 8,
            rda_percent_operator: '=',
            nutrition_operator: '=',
            quantity_unit: 'g',
          },
          {
            code: 'PIM_NUT_GES_BALL',
            name: 'Ballaststoffe',
            category: 'BIG9',
            quantity: 1.5,
            nutrition_operator: '=',
            quantity_unit: 'g',
          },
          {
            code: 'PIM_NUT_PROTEINE',
            name: 'Eiweiss',
            category: 'BIG9',
            quantity: 2,
            rda_percent: 4,
            rda_percent_operator: '=',
            nutrition_operator: '=',
            quantity_unit: 'g',
          },
          {
            code: 'PIM_NUT_KOCHSALZ',
            name: 'Salz',
            pictogram_name: 'Salz',
            category: 'BIG9',
            quantity: 2.1,
            rda_percent: 35,
            rda_percent_operator: '=',
            nutrition_operator: '=',
            quantity_unit: 'g',
          },
        ],
        base_description: '1 Teller',
        base_quantity: 250,
        base_quantity_description: 'zubereitet',
        base_unit: 'ml',
        package_type: 'Packung',
        portions_per_package: '4',
        portions_per_package_precision: '=',
      },
    },
    features: [
      {
        label_code: 'MISO_produktionsanspruch',
        label: 'Produktionsverfahren',
        values: [
          {
            value_code:
              'MISO_produktionsanspruch_freivonkonservierungsstoffengesetz',
            value: 'Frei von Konservierungsstoffen laut Gesetz',
          },
          {
            value_code:
              'MISO_produktionsanspruch_freivongeschmacksverstaerkendenzusatzstoffen',
            value: 'Frei von geschmacksverstärkenden Zusatzstoffen laut Gesetz',
          },
        ],
        category_code: 'MISO_CLA_LebensmittelGetraenke_Alle',
        top_fact: false,
      },
      {
        label_code: 'MISO_cu_gebindeart',
        label: 'Verpackungsart',
        values: [
          {
            value_code: 'MISO_cu_gebindeart_beutelsack',
            value: 'Beutel/Sack',
          },
        ],
        category_code: 'MISO_CLA_LebensmittelGetraenke_Alle',
        top_fact: false,
      },
      {
        label_code: 'MISO_zubereitungsverfahren',
        label: 'Hinweise für die Zubereitung',
        values: [
          {
            value_code: 'MISO_zubereitungsverfahren_kochen',
            value: 'Kochen',
          },
        ],
        category_code: 'MISO_CLA_LebensmittelGetraenke_Alle',
        top_fact: false,
      },
      {
        label_code: 'MISO_musserwaermtwerden',
        label: 'Muss erwärmt werden',
        values: [
          {
            value_code: 'BOOLEAN_TRUE',
            value: 'Ja',
            boolean_value: true,
          },
        ],
        category_code:
          'MISO_CLA_BearbeiteteVerarbeiteteNahrungsmittel_LebensmittelGetraenke_Alle',
        top_fact: false,
      },
      {
        label_code: 'MISO_anzahlportionen',
        label: 'Anzahl Portionen',
        values: [
          {
            value_code: 'NUMERIC_4',
            value: '4',
            numeric_value: 4,
          },
        ],
        category_code:
          'MISO_CLA_BearbeiteteVerarbeiteteNahrungsmittel_LebensmittelGetraenke_Alle',
        top_fact: false,
      },
      {
        label_code: 'MISO_zubereitungszeit',
        label: 'Zubereitungszeit (min.)',
        values: [
          {
            value_code: 'NUMERIC_5',
            value: '5',
            numeric_value: 5,
          },
        ],
        category_code:
          'MISO_CLA_BearbeiteteVerarbeiteteNahrungsmittel_LebensmittelGetraenke_Alle',
        top_fact: false,
      },
      {
        label_code: 'MISO_serviertemperatur',
        label: 'Serviertemperatur',
        values: [
          {
            value_code: 'MISO_serviertemperatur_heisswarm',
            value: 'heiss/warm',
          },
        ],
        category_code:
          'MISO_CLA_Fertigsuppen_BearbeiteteVerarbeiteteNahrungsmittel_LebensmittelGetraenke_Alle',
        top_fact: false,
      },
      {
        label_code: 'MISO_formbeschaffenheit',
        label: 'Form/Beschaffenheit',
        values: [
          {
            value_code: 'MISO_formbeschaffenheit_pulver',
            value: 'Pulver',
          },
        ],
        category_code:
          'MISO_CLA_Fertigsuppen_BearbeiteteVerarbeiteteNahrungsmittel_LebensmittelGetraenke_Alle',
        top_fact: false,
      },
      {
        label_code: 'MAPI_VEGETARIANISM',
        label: 'Vegetarismus',
        values: [
          {
            value_code: 'MAPI_VEGETARIANISM_vegan',
            value: 'vegan',
          },
        ],
        category_code: 'MAPI_VEGETARIANISM',
        top_fact: false,
      },
    ],
    allergens: [
      {
        code: 'ALLG_SOJA',
        name: 'Sojabohnen und daraus gewonnene Erzeugnisse',
        contamination_code: 'VORHANDEN',
        contamination: 'vorhanden',
      },
      {
        code: 'ALLG_GLUTEN',
        name: 'Glutenhaltige Getreide',
        contamination_code: 'KANN_ENTHALTEN',
        contamination: 'kann enthalten',
      },
    ],
    general_information: [
      {
        label: 'Zubereitungshinweis',
        value:
          'Beutelinhalt mit dem Schwingbesen in 1 Liter kaltes Wasser einrühren. Zum Kochen bringen und 5 Minuten köcheln lassen. Dabei gelegentlich umrühren.',
      },
      {
        label: 'Kühlhinweis / Aufbewahrungshinweis',
        value: 'Kühl und trocken aufbewahren.',
      },
    ],
    image: {
      original:
        'https://image.migros.ch/original/2992733a22b980e8c9a992c96b477d680bd2aa52/bon-chef-tomaten.jpg',
      stack:
        'https://image.migros.ch/{stack}/2992733a22b980e8c9a992c96b477d680bd2aa52/bon-chef-tomaten.jpg',
    },
    image_transparent: {
      original:
        'https://image.migros.ch/original/ebb6a19198184b33e59a396802a3492d56ab14f3/bon-chef-tomaten.png',
      stack:
        'https://image.migros.ch/{stack}/ebb6a19198184b33e59a396802a3492d56ab14f3/bon-chef-tomaten.png',
    },
    internal_features: [
      {
        label_code: 'MISO_aMigos_anzeige',
        label: 'Anzeige aMigos!',
        values: [
          {
            value_code: 'MISO_aMigos_anzeige_ja',
            value: 'Ja',
          },
        ],
        category_code: 'MISO_CLA_aMigos_Alle',
        top_fact: false,
      },
      {
        label_code: 'MISO_aMigos_sortierung',
        label: 'Sortierung aMigos',
        values: [
          {
            value_code: 'NUMERIC_400',
            value: '400',
            numeric_value: 400,
          },
        ],
        category_code: 'MISO_CLA_aMigos_Alle',
        top_fact: false,
      },
      {
        label_code: 'MAPI_PRODUCT_KIND',
        values: [
          {
            value_code: 'HAWA',
            value: 'Handelsware',
          },
        ],
        category_code: 'MAPI_PRODUCT_KIND',
        top_fact: false,
      },
      {
        label_code: 'MAPI_ASSORTMENT_LIST_KIND',
        values: [
          {
            value_code: 'M',
            value: 'Kolonial Standard',
          },
        ],
        category_code: 'MAPI_ASSORTMENT_LIST_KIND',
        top_fact: false,
      },
      {
        label_code: 'MAPI_PRODUCT_GROUP',
        values: [
          {
            value_code: '11110',
            value: 'TROCKENSUPPEN BEUTEL',
          },
        ],
        category_code: 'MAPI_PRODUCT_GROUP',
        top_fact: false,
      },
    ],
    vat: {
      id: 2,
      percentage: 2.5,
    },
    regulated_description: 'Tomatensuppe getrocknet',
    links: {
      migros_ch: {
        url: 'https://produkte.migros.ch/products/106050000000',
        name: 'migros.ch',
        canonical: 'https://produkte.migros.ch/bon-chef-tomaten',
        type: 'info',
        purchasable: false,
      },
      migipedia: {
        url: 'https://migipedia.migros.ch/de/products/106050000000',
        name: 'Migipedia',
        canonical: 'https://produkte.migros.ch/bon-chef-tomaten',
        type: 'info',
        purchasable: false,
      },
    },
    regional_availability: {
      gmaa: {
        probability: 99,
      },
      gmbs: {
        probability: 98,
      },
      gmge: {
        probability: 82,
      },
      gmlu: {
        probability: 97,
      },
      gmnf: {
        probability: 92,
      },
      gmos: {
        probability: 100,
      },
      gmti: {
        probability: 66,
      },
      gmvd: {
        probability: 86,
      },
      gmvs: {
        probability: 79,
      },
      gmzh: {
        probability: 93,
      },
    },
    updated_at: '2020-09-16T05:42:09+0200',
    base_unit: 'CU',
    slugs: {
      de: 'bon-chef-tomaten',
      fr: 'bon-chef-veloute-de-tomates',
      it: 'bon-chef-pomodori',
    },
    receipt_text: 'Bon Chef Tomaten',
    main_supplier: {
      name: 'HACO AG',
      id: '0010000181',
      supplier_product_id: '833020',
    },
    price: {
      valid_from: '2018-01-29T00:00:00+0100',
      valid_to: '9999-12-31T23:59:59+0100',
      currency: 'CHF',
      source: 'PriceRepository',
      item: {
        price: 1.6,
        quantity: 1,
        unit: 'CU',
        varying_quantity: false,
        display_quantity: '80g',
      },
      base: {
        price: 2,
        quantity: 100,
        unit: 'g',
      },
    },
    retailer: {
      id: 'supermarkt',
      name: 'Supermarkt',
    },
    ratings: {
      count_all: 7,
      average_all: 3.75,
    },
    data_source: 'SAP-X11',
    origins: {
      producing_country: 'Hergestellt in der Schweiz',
    },
    ingredients:
      'Tomaten getrocknet 44 %, Kartoffelstärke, Zucker, Kochsalz jodiert, Maltodextrin, Würze (aus <strong>Soja</strong>), Hefeextrakt, Pflanzenöle (Raps, Sonnenblumen), Verdickungsmittel: Guarkernmehl, Säuerungsmittel: Citronensäure, natürliches Aroma, Randensaftpulver färbend, Basilikum getrocknet, Gewürze, Farbstoff: Paprikaextrakt.',
    allergen_text: 'Kann enthalten: Gluten.',
    package: {
      content: 80,
      content_unit_code: 'g',
      content_unit: 'Gramm',
      net_weight: 0.08,
      net_weight_unit_code: 'kg',
      net_weight_unit: 'Kilogramm',
      precision: 'exact',
      brutto_weight: 0.09,
      brutto_weight_unit_code: 'kg',
      brutto_volume: 0.223,
      brutto_volume_unit_code: 'cdm',
      height: 15.7,
      length: 1.1,
      width: 12.9,
      unit_dimension: 'cm',
      price_comparison_content: 100,
      size: '80g',
    },
    package_information: {
      tu: {
        brutto_weight: 1.164,
        brutto_weight_unit_code: 'kg',
        brutto_volume: 4.979,
        brutto_volume_unit_code: 'cdm',
        height: 18,
        length: 19.9,
        width: 13.9,
        dimension_unit_code: 'cm',
        number_of_base_units: 12,
      },
      cu: {
        brutto_weight: 0.09,
        brutto_weight_unit_code: 'kg',
        brutto_volume: 0.223,
        brutto_volume_unit_code: 'cdm',
        height: 15.7,
        length: 1.1,
        width: 12.9,
        dimension_unit_code: 'cm',
        number_of_base_units: 1,
      },
      lu: {
        brutto_weight: 360.232,
        brutto_weight_unit_code: 'kg',
        brutto_volume: 868.8,
        brutto_volume_unit_code: 'cdm',
        height: 153,
        length: 120,
        width: 80,
        dimension_unit_code: 'cm',
        number_of_base_units: 3456,
      },
    },
    related_products: {
      purchase_recommendations: {
        product_ids: [
          '106065000000',
          '106052000000',
          '106051200000',
          '106092600000',
          '106057000000',
        ],
      },
    },
    declarations: {
      food: {
        directions:
          'Nährwerte zubereitet auf Basis von 80 g Pulver + 1 L Wasser',
        features: [
          {
            label_code: 'GDSN_M281_NetContent',
            label: 'Nettofüllmenge Wert',
            values: [
              {
                value_code: 'NUMERIC_80',
                value: '80',
                numeric_value: 80,
              },
            ],
            category_code: 'GDSN',
            top_fact: false,
            unit_code: 'g',
          },
          {
            label_code: 'QIM_ZubereitungshinweisDeklaration',
            label: 'Zubereitungshinweis',
            values: [
              {
                value:
                  'Beutelinhalt mit dem Schwingbesen in 1 Liter kaltes Wasser einrühren. Zum Kochen bringen und 5 Minuten köcheln lassen. Dabei gelegentlich umrühren.',
              },
            ],
            category_code: 'GDSN',
            top_fact: false,
          },
        ],
      },
    },
    reindex_date: '9999-12-31T00:00:00+0100',
    recipe_ingredient_ids: ['10000'],
    views: ['all', 'browse'],
  };

  constructor() {}

  getInfo(id: string): ProductInfo {
    return this.info;
  }
}
