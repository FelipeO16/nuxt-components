/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
    content: [
        'components/**/*.{vue,js,ts}',
        'layouts/**/*.vue',
        'pages/**/*.vue',
        'stores/*.ts',
        'composables/**/*.{js,ts}',
        'plugins/**/*.{js,ts}',
        'App.{js,ts,vue}',
        'app.{js,ts,vue}',
        'Error.{js,ts,vue}',
        'error.{js,ts,vue}',
        'content/**/*.md'
    ],
    theme: {
        extend: {
            // colors: {
            //     'warning': {
            //         '50': '#FFFCF2', 
            //         '100': '#FFFAE6', 
            //         '200': '#FCEEC0', 
            //         '300': '#FAE29B', 
            //         '400': '#F7C352', 
            //         '500': '#f59e0b', 
            //         '600': '#DB8709', 
            //         '700': '#B86706', 
            //         '800': '#944B03', 
            //         '900': '#6E3402', 
            //         '950': '#471E01'
            //     },'danger': {
            //         '50': '#FFF5FB', 
            //         '100': '#FFEDF7', 
            //         '200': '#FCCFE5', 
            //         '300': '#FAAFCE', 
            //         '400': '#F7779B', 
            //         '500': '#f43f5e', 
            //         '600': '#DB324F', 
            //         '700': '#B82339', 
            //         '800': '#941828', 
            //         '900': '#6E0D18', 
            //         '950': '#47060C'
            //     },'success': {
            //         '50': '#F2FCFC', 
            //         '100': '#E1F7F6', 
            //         '200': '#B9EDEA', 
            //         '300': '#91E3DC', 
            //         '400': '#4ECCBF', 
            //         '500': '#14b8a6', 
            //         '600': '#11A68D', 
            //         '700': '#0B8A6C', 
            //         '800': '#086E4F', 
            //         '900': '#045235', 
            //         '950': '#02361F'
            //     },'info': {
            //         '50': '#F2FDFF', 
            //         '100': '#E6F9FC', 
            //         '200': '#C0EEFA', 
            //         '300': '#98E1F5', 
            //         '400': '#51C6F0', 
            //         '500': '#0ea5e9', 
            //         '600': '#0A8CD1', 
            //         '700': '#076BAD', 
            //         '800': '#06508C', 
            //         '900': '#033669', 
            //         '950': '#011D42'
            //     },'muted': {
            //         '50': '#F7F9FA', 
            //         '100': '#EDF2F5', 
            //         '200': '#D3DDE3', 
            //         '300': '#BAC8D1', 
            //         '400': '#8D9EB0', 
            //         '500': '#64748b', 
            //         '600': '#536580', 
            //         '700': '#384A69', 
            //         '800': '#243454', 
            //         '900': '#142140', 
            //         '950': '#091129'
            //     },'primary': {
            //         '50': '#FCF7FF', 
            //         '100': '#F9F0FF', 
            //         '200': '#EBD4FC', 
            //         '300': '#DCBBFA', 
            //         '400': '#B68BF7', 
            //         '500': '#8b5cf6', 
            //         '600': '#7248DB', 
            //         '700': '#5733B8', 
            //         '800': '#3B2194', 
            //         '900': '#26136E', 
            //         '950': '#150847'
            //     }
            // }
            colors: {

                primary: {
                    '50': '#fff2fe', 
                    '100': '#ffe6fc', 
                    '200': '#ffbff6', 
                    '300': '#ff99f0', 
                    '400': '#ff4dde', 
                    '500': '#ff00c8', 
                    '600': '#e600ac', 
                    '700': '#bf0083', 
                    '800': '#990061', 
                    '900': '#730041', 
                    '950': '#4a0025'
                },
                muted: colors.slate,
                info: colors.sky,
                success: colors.teal,
                danger: colors.rose,
                warning: colors.amber,
            }
        },
    },
    plugins: [],
    safelist: [
        'whitelisted',
        {
            pattern: /border-(white|black)/
        },
        {
            pattern: /text-(indigo|orange|blue|green|yellow|red|gray|sky|rose|amber)-(100|400|500|600|800)/
        },
        {
            pattern: /border-(indigo|orange|blue|green|yellow|red|gray|sky|rose|amber)-(100|400|500|600|800)/
        },
        {
            pattern: /bg-(indigo|orange|blue|green|yellow|red|gray|sky|rose|amber)-(100|400|500|600|800)/
        },
    ],
    darkMode: 'class'
}