import { ZeComponent } from './ze.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';

describe('ZeComponent with ngneat/spectator and setted props', () => {
  const createComponent = createComponentFactory(ZeComponent);

  function setup(props: any): Spectator<ZeComponent> {
    return createComponent({ props: props });
  }

  it('should set [dummyText] value using props property', () => {
    const spectator = setup({ dummyText: 'teste' });

    expect(spectator.component.dummyText).toEqual('teste');
  });
});
