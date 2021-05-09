import { ZeComponent } from './ze.component';
import { createComponentFactory } from '@ngneat/spectator';

xdescribe('ZeComponent with ngneat/spectator', () => {
  const createComponent = createComponentFactory(ZeComponent);

  it('should set the button class name according to the [className] input', () => {
    const spectator = createComponent();
    spectator.setInput('className', 'danger');
    expect(spectator.query('button')).toHaveClass('danger');
    expect(spectator.query('button')).not.toHaveClass('success');
  });
});
