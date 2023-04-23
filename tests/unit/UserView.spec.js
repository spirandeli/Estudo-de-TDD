jest.mock('@/store/actions')
import VUserProfile from '@/components/VUserProfile'
import VUserSearchForm from '@/components/VUserSearchForm'
import actions from '@/store/actions'
import initialState from '@/store/state'
import UserView from '@/views/UserView'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import userFixture from './fixtures/user'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('UserView', () => {
  let state

  const build = () => {
    const wrapper = shallowMount(UserView, {
      localVue,
      store: new Vuex.Store({ 
        state,
        actions,
       })
    })

    return {
      wrapper,
      userSearchForm: () => wrapper.find(VUserSearchForm),
      userProfile: () => wrapper.find(VUserProfile)
    }
  }

  beforeEach(() => {
    jest.resetAllMocks()
    state = { ...initialState }
  })

  it('Confere o Usuario usado em userProfile', () => {
    // arrange
    state.user = userFixture
    const { userProfile } = build()

    // assert
    expect(userProfile().vm.user).toBe(state.user)
  })

  
  it('Procura por um Usuario quando der "submitted"', () => {
    // arrange
    const expectedUser = 'kuroski'
    const { userSearchForm } = build()

    // act
    userSearchForm().vm.$emit('submitted', expectedUser)

    // assert
    expect(actions.SEARCH_USER).toHaveBeenCalled()
    expect(actions.SEARCH_USER.mock.calls[0][1]).toEqual({ username: expectedUser })
  })  
})