import React from 'react';
import FastImage from '@rocket.chat/react-native-fast-image';
import {TCustomEmoji} from "./types";

const CustomEmoji = React.memo(({ baseUrl, emoji, style }: TCustomEmoji) => (
	<FastImage
		style={style}
		source={{
			uri: `${ baseUrl }/emoji-custom/${ encodeURIComponent(emoji.content || emoji.name) }.${ emoji.extension }`,
			priority: FastImage.priority.high
		}}
		resizeMode={FastImage.resizeMode.contain}
	/>
), (prevProps, nextProps) => {
	const prevEmoji = prevProps.emoji.content || prevProps.emoji.name;
	const nextEmoji = nextProps.emoji.content || nextProps.emoji.name;
	return prevEmoji === nextEmoji;
});

export default CustomEmoji;
