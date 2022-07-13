module.exports = {
    title: 'JustLend',
    description: 'JustLend Documentation',
    base: '/doc/',
    theme: '',
    locales: {
        '/': {
            lang: 'en-US',
            label: 'English',
            title: 'JustLend Documentation',
            description: 'JustLend Documentation'
        }
    },
    themeConfig: {
        sidebarDepth: 0,
        nav: [
            {text: 'App', link: 'https://justlend.org/#/home'},
            {text: 'FAQ', link: '/faq/'},
            {text: 'Governance', link: '/governance/'},
            {text: 'Risk', link: '/risk/'}
        ],
        sidebar: {
            '/faq/': [
                '',
                'deposit-earning',
                'borrowing',
                'v3-features',
                'swap-repay',
                'testing',
                'liquidations',
                'flash-loans',
                'governance',
                'migration-staking',
                'troubleshooting'
            ],
            '/governance/': [
                '',
                'eco-overview',
                'policies',
                'governance',
                'safety-module',
                'incentives',
                'flashpaper',
                'terminology'
            ],
            '/risk/': [
                '',
                {
                    title: 'Asset Risk',
                    path: '/risk/asset/',
                    collapsable: false,
                    children: [
                        '/risk/asset/',
                        '/risk/asset/adding-asset',
                        '/risk/asset/methodology',
                        '/risk/asset/risk-per-asset',
                        '/risk/asset/risk-params',
                        '/risk/asset/price-discovery',
                        '/risk/asset/amm'
                    ]
                },
                {
                    title: 'Liquidity Risk',
                    path: '/risk/liquidity/',
                    collapsable: false,
                    children: [
                        '/risk/liquidity/',
                        '/risk/liquidity/historical-utilisation',
                        '/risk/liquidity/atoken-valuation',
                        '/risk/liquidity/borrow-interest-rate',
                        '/risk/liquidity/atoken-liquidity'
                    ]
                }
            ],
            '/': [
                '',
                {title: 'FAQ', path: '/faq/'},
                {title: 'Governance', path: '/governance/'},
                {title: 'Risk', path: '/risk/'},
                {title: 'Community Telegram', path: 'https://t.me/officialjustlend'},
            ]
        }
    }
}