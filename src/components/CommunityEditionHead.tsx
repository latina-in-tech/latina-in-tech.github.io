import { Locale } from "i18n.config";
import Head from "next/head";
import { ReactNode } from "react";

type Props = {
    children?: ReactNode;
    metadata: {
        title: string;
        description: string;
        keywords: string[];
        opengraph?: {
            title: string;
            description: string;
            locale: Locale & {
                alternate: Locale;
            };
            image: string & {
                width: string;
                height: string;
                alt: string;
            };
        };
        twitter?: {
            type: string;
            title: string;
            description: string;
            image: string & {
                width: string;
                height: string;
                alt: string;
            }; 
        };
    };
};

export default function CommunityEditionHead({children, metadata}: Props) {
    const opengraph = metadata.opengraph;
    const twitter = metadata.twitter;

    return (
        <Head>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />
            <meta name="keywords" content={metadata.keywords.join(',')} />
            {opengraph && 
                <>
                    <meta property="og:title" content={opengraph.title} />
                    <meta property="og:description" content={opengraph.description} />
                    <meta property="og:locale" content={opengraph.locale} />
                    <meta property="og:image" content={opengraph.image} />
                    <meta property="og:image:width" content={opengraph.image.width} />
                    <meta property="og:image:height" content={opengraph.image.height} />
                    <meta property="og:image:alt" content={opengraph.image.alt} />
                    <meta property="og:locale:alternate" content={opengraph.locale.alternate} />
                </>
            }
            {twitter && 
                <>
                    <meta name="twitter:card" content={twitter.type} />
                    <meta name="twitter:title" content={twitter.title} />
                    <meta name="twitter:description" content={twitter.description} />
                    <meta name="twitter:image" content={twitter.image} />
                    <meta name="twitter:image:width" content={twitter.image.width} />
                    <meta name="twitter:image:height" content={twitter.image.height} />
                    <meta name="twitter:image:alt" content={twitter.image.alt} />
                </>
            }
            {children}
        </ Head>
    );
}
