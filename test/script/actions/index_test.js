import chai from 'chai'
import dirtyChai from 'dirty-chai'
import * as actions from '../../../src/script/actions'

const expect = chai.expect

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'Finish docs'
    const expectedAction = {
      type: actions.ADD_TODO,
      text,
      id: 0
    }
    expect(actions.addTodo(text)).to.eql(expectedAction)
  })
})
