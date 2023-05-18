import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LanguageService } from './language.service';
import { environment } from '../../environments/environment';
import { LanguageModel } from '../models/language.model'

describe('TranslationService', () => {
  let service: LanguageService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LanguageService]
    });

    service = TestBed.inject(LanguageService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Make sure that there are no outstanding requests
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch the list of languages', () => {
    const mockLanguages: LanguageModel[] = [
      { iso2: 'eng', englishName: 'English', nativeName: 'English' },
      { iso2: 'fre', englishName: 'French', nativeName: 'Français' }
    ];

    service.getLanguages().subscribe(languages => {
      expect(languages.length).toBe(2);
      expect(languages).toEqual(mockLanguages);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/languages`);
    expect(req.request.method).toBe('GET');
    req.flush(mockLanguages);
  });
});
