import VUserProfile from '@/components/VUserProfile'
import { shallowMount } from '@vue/test-utils'
import user from './fixtures/user'

describe('VUserProfile', () => {
  let props

  const build = () => {
    const wrapper = shallowMount(VUserProfile, {
      propsData: props,
    })
    return {
      wrapper,
      avatar: () => wrapper.find('.user-profile__avatar'),
      name: () => wrapper.find('.user-profile__name'),
      bio: () => wrapper.find('.user-profile__bio'),
    }
  }

  beforeEach(() => {
    props = {
      user
    }
  })

  it('Renderiza o Componente', () => {
    // arrange
    const { wrapper } = build()
    // assert
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('Se os campos existem e estão corretos', () => {
    // arrange
    const { avatar, name, bio } = build()
    // assert
    expect(avatar().exists()).toBe(true)
    expect(avatar().attributes().src).toBe(props.user.avatar_url)

    expect(name().exists()).toBe(true)
    expect(name().text()).toBe(props.user.name)

    expect(bio().exists()).toBe(true)
    expect(bio().text()).toBe(props.user.bio)
  })
})