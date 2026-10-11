import { createFileRoute } from '@tanstack/react-router';
import { ProductCatalog } from '@/components/product-catalog';
import { PageHero, CTA } from '@/components/site-shell';
import { pageHead } from '@/lib/products';
export const Route=createFileRoute('/products')({head:()=>pageHead('Our ingredient collection','Explore dehydrated vegetable, fruit and superfood powders. Request tailored specifications, bulk packaging and private-label options.'),component:Products});
function Products(){return <><PageHero eyebrow="OUR INGREDIENT COLLECTION" title={<>Naturally diverse.<br/><em>Thoughtfully selected.</em></>} description="From everyday essentials to distinctive superfoods, find ingredients that bring your formulations to life."/><section className="section"><div className="container"><ProductCatalog/><p className="placeholder-note mt-9">Specifications can be customised to your requirement. Photography is illustrative; request batch samples and confirmed specifications before ordering. Product availability is subject to confirmation.</p></div></section><CTA/></>}
