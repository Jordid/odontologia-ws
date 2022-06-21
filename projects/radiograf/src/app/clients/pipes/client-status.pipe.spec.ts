import { ClientStatusPipe } from './client-status.pipe';

describe('ClientStatusPipe', () => {
  it('create an instance', () => {
    const pipe = new ClientStatusPipe();
    expect(pipe).toBeTruthy();
  });
});
