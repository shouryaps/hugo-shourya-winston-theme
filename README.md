# hugo shouryaps blog theme

This theme powers [shouryaps.com](https://shouryaps.com). Its forked from [Hugo Winston Theme](https://github.com/zerostaticthemes/hugo-winston-theme) by [Zerostatic](https://www.zerostatic.io/).  

## Running and testing theme locally
1. Change directory to `exampleSite`
2. Run `hugo serve -D`

## Using the template
1. Install hugo (Make sure extended version is installed)
2. Create a new site
```sh
hugo new site sitename
```
3. Add the theme
```sh
cd sitename
git init
mkdir themes # run this if themes folder doesn't exists
git submodule add https://github.com/shouryaps/hugo-shouryaps-blog-theme.git themes/hugo-shouryaps-blog-theme
```
4. Copy the example site
```sh
cp -a themes/hugo-shouryaps-blog-theme/exampleSite/. .
```
5. Modify the `config.toml` as per required values. Make sure `themesDir` value is changed to `themes`, instead of `../..`
6. Delete old posts (`.md` files) from `content/posts`
7. Add a new post
```sh
hugo new posts/my-first-post.md
```