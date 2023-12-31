import Image from 'next/image'
import type { TweetComponents } from 'react-tweet'

export const components: TweetComponents = {
  AvatarImg: (props) => <Image {...props} />,
  MediaImg: (props) => <Image {...props} fill unoptimized />,
}
