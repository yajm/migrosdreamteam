import { Injectable } from '@angular/core';
import { MigrosApiService } from '../../api/services/migros-api.service';
import { Purchase } from '../models/purchase';
import { Product } from '../models/product';

@Injectable()
export class PurchaseStateService {
  private loading = true;
  public purchases: Purchase[] = [
    {
      einkaufID: '201901-102531-0001',
      kundeID: 102531,
      profitKstID: 74710,
      profitKstNameDe: 'LU MMM Zugerland Steinhausen',
      genossenschaftsCode: 'GMLU',
      time: '2019-01-04T18:17:12Z',
    },
  ];

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

  constructor(private migrosApi: MigrosApiService) {
    //this.migrosApi.get('purchase/102531').then(console.log)
  }

  getPurchase(id: string) {
    return this.purchases.find((p) => p.einkaufID === id);
  }

  async getPurchases() {
    return this.purchases;
  }

  async getArticles(purchaseId: string) {
    return this.products;
  }
}