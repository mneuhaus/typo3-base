# General site config
config {
	# Development
	## Disable Cache
	no_cache = 0

	# html5? Yes, please!
	doctype = html5

	# XML? No, thank you!
	xmlprologue = none

	# Taking out the trash, aka. cleaning up the code

	# Tries to clean up the output. Tries...
	# xhtml_cleaning = all

	# If set, the stdWrap property “prefixComment” will be disabled, thus preventing any revealing and space-consuming comments in the HTML source code.
	disablePrefixComment = 1

	# If set, the inline styles TYPO3 controls in the core are written to a file
	inlineStyle2TempFile = 1

	# All javascript (includes and inline) will be moved to the bottom of the html document
	moveJsFromHeaderToFooter = 1

	# If set, the default JavaScript in the header will be removed (blurLink function and browser detection variables)
	removeDefaultJS = 1

	# If set inline or externalized (see removeDefaultJS above) JavaScript will be minified.
	# Minification will remove all excess space and cause faster page loading.
	minifyJS = 1

	# Add L and print values to all links in TYPO3.
	linkVars = L, print

	# Charset, should always be utf-8
	renderCharset = utf-8

	# Search. This should be disabled if you are not using Indexed search!

	# For pages
	index_enable = {$config.index_enable}

	# For documents
	index_externals = {$config.index_externals}

	# Multidomain setup

	# If set, then every “typolink” is checked whether it's linking to a page within the current rootline of the site.
	typolinkCheckRootline = 1

	# This option enables to create links across domains using current domain's linking scheme.
	typolinkEnableLinksAcrossDomains = 1

	# Spam protection
	spamProtectEmailAddresses = ascii

	# Enable RealURL
	tx_realurl_enable = 1

	# The <base> tag in the header of the document which is used by RealURL
	absRefPrefix = {$config.absRefPrefix}
}
