import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    turbopack: {
        rules: {
            '*.svg': {
                loaders: [
                    {
                        loader: '@svgr/webpack',
                        options: {
                            exportType: 'default',
                            svgo: true,
                            titleProp: true,
                            ref: true,
                        },
                    },
                ],
                as: '*.js',
            },
        },
    },
};


export default nextConfig;
