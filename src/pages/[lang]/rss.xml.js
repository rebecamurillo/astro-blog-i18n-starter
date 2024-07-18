import rss from '@astrojs/rss';
import { getBlogPosts } from '../../content/config';
import { ui } from '../../i18n/ui';
import { LANGUAGES_KEYS } from '../../i18n/utils';

export function getStaticPaths() {
	const paths = LANGUAGES_KEYS.map((lang) => ({
		params: { lang },
	}));
	return paths;
}

export async function GET(context) {
	const { lang } = context.params;
	const posts = (await getBlogPosts())
		?.filter((blog) => {
			return blog?.data?.lang === lang;
		})
		.sort((a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf());
	return rss({
		title: ui[lang]['site.title'],
		description: ui[lang]['site.description'],
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/${lang}/blog/${post.blog_slug}`,
		})),
	});
}
