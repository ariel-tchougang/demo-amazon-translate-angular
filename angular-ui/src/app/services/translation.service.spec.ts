import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TranslationService } from './translation.service';
import { environment } from '../../environments/environment';
import {TranslationModel} from "../models/translation.model";

describe('TranslationService', () => {
  let service: TranslationService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TranslationService]
    });

    service = TestBed.inject(TranslationService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Make sure that there are no outstanding requests
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should post the text to be translated and receive the translated text', () => {
    const mockTranslation: TranslationModel = { translatedText: 'texte traduit' };

    service.translate('en', 'fr', 'translated text').subscribe(response => {
      expect(response).toEqual(mockTranslation);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/translate`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({ translatedText: 'texte traduit' });
    req.flush(mockTranslation);
  });
});
