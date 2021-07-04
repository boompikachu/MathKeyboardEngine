import { describe } from 'mocha';
import { expect } from 'chai';
import * as f2 from '../../src/subfolder/file2';

  describe('SubFolderClass', () =>
  {
    describe('call uses 2 files', () =>
    {
      it('should work', () =>
      {
        expect(f2.SubFolderClass.callMyOtherMethod('hello'))
        .to
        .equal('hello hello');
      });
    });
    describe('call uses 1 file', () =>
    {
      it('should work', () =>
      {
        expect(f2.SubFolderClass.newMethod())
        .to
        .equal('booh');
      });
    });
  });