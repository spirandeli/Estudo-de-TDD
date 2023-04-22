import VUserProfile from '@/components/VUserProfile'
import VUserSearchForm from '@/components/VUserSearchForm'
import UserView from '@/views/UserView'
import { shallowMount } from '@vue/test-utils'

describe('UserView', () => {
  it('Se o componente renderiza', () => {
    // arrange
    const wrapper = shallowMount(UserView)

    // assert
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('Se os componentes estão sendo renderizados', () => {
    // arrange
    const wrapper = shallowMount(UserView)
    const userSearchForm = wrapper.find(VUserSearchForm)
    const userProfile = wrapper.find(VUserProfile)

    // assert
    expect(userSearchForm.exists()).toBe(true)
    expect(userProfile.exists()).toBe(true)
  })
})