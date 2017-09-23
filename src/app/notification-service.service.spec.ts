import { TestBed, inject } from '@angular/core/testing';

import { NotificationServiceService } from './notification-service.service';

describe('NotificationServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotificationServiceService]
    });
  });

  it('should be created', inject([NotificationServiceService], (service: NotificationServiceService) => {
    expect(service).toBeTruthy();
  }));
});
