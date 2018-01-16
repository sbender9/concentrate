const chai = require('chai')
const expect = chai.expect
const Concentrate = require('../')


// chai.config.showDiff = false; // Without this line, the diff generation hangs

describe('uint64', function () {
  it('should encode ok', function () {
    const result = Concentrate().uint64(1456909977176).result()
    expect(result).to.deep.equal(Buffer.from('00000153369a0658', 'hex'))
  })
})
