/**
 * jasmine.clock()
 * 
 * - serve para tornar síncrono as chamadas de setTimeout e setInteval ou que tenham de alguma forma que ver com tempo
 * - deve ser instalado antes da chamada no teste com jasmine.clock().install()
 * - deve ser removido no fim do teste ou suíte com jasmine.clock().uninstall()
 * - executa a operação de chamada com jasmine.clock().tick(), que recebe opcionalmente, o número de milisegundos a simular
 */

xdescribe('playing with jasmine.clock', () => {
    beforeEach(() => {
        jasmine.clock().install();
    });

    afterEach(() => {
        jasmine.clock().uninstall();
    });

    let testSpy: any;

    beforeAll(() => {
        testSpy = jasmine.createSpy('test');
    });

    it('showing with setTimeout with the right time', () => {
        setTimeout(() => { testSpy(10); }, 1000);

        jasmine.clock().tick(1000);
        expect(testSpy).toHaveBeenCalled();
    });

    it('showing with setTimeout without the right time', () => {
        setTimeout(() => { testSpy(10); }, 1000);

        jasmine.clock().tick(990);
        expect(testSpy).not.toHaveBeenCalled();
    });
});