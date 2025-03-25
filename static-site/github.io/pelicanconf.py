AUTHOR = 'Telmo Claro'
SITENAME = 'Telmo Claro Portfolio'
SITEURL = ''

PATH = 'content'

TIMEZONE = 'Europe/Lisbon'

DEFAULT_LANG = 'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = (('GitHub', 'https://github.com/Telmo-Claro'),
         ('LinkedIn', 'https://linkedin.com/in/telmo-claro'),)

# Social widget
SOCIAL = (('GitHub', 'https://github.com/Telmo-Claro'),
          ('LinkedIn', 'https://linkedin.com/in/telmo-claro'),)

DEFAULT_PAGINATION = 10

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True

THEME = 'themes/notmyidea'

# Static paths
STATIC_PATHS = ['images', 'extra/css', 'extra/js', 'extra/robots.txt', 'extra/favicon.ico']
EXTRA_PATH_METADATA = {
    'extra/robots.txt': {'path': 'robots.txt'},
    'extra/favicon.ico': {'path': 'favicon.ico'},
    'extra/css': {'path': 'css'},
    'extra/js': {'path': 'js'}
}

# Plugin settings
PLUGIN_PATHS = ['plugins']
PLUGINS = []

# URL settings
ARTICLE_URL = 'blog/{slug}/'
ARTICLE_SAVE_AS = 'blog/{slug}/index.html'
PAGE_URL = '{slug}/'
PAGE_SAVE_AS = '{slug}/index.html'

# Special pages
PAGE_PATHS = ['pages']
STATIC_SAVE_AS = '{path}'
PAGE_SAVE_AS = '{slug}/index.html'
AUTHOR_SAVE_AS = ''
CATEGORY_SAVE_AS = ''
TAG_SAVE_AS = ''

# Menu items
MENUITEMS = (
    ('Home', '/'),
    ('Projects', '/projects'),
    ('About', '/about'),
    ('Contact', '/contact'),
    ('Tic Tac Toe', '/tictactoe'),
)
