import { TestBed } from '@angular/core/testing';

import { FriendManagementService } from './friend-management.service';

describe('FriendManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FriendManagementService = TestBed.get(FriendManagementService);
    expect(service).toBeTruthy();
  });
});
