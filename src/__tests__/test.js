test('ErrorRepository', () => {
    const ErrorRepository = require('../errorrepo.js')

    const fErrors = new ErrorRepository()
          
    const received = fErrors.translate(2)

    expected = 'error2'
    
    expect(received).toEqual(expected)
});