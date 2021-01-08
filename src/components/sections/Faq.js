import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';
import ExternalLink from '@common/ExternalLink';


const FAQS = [
  {
    title: 'Web geliştirici olmak için yol haritası(çaylaktan tavsiye içerir)',
    content: () => (
      <>
       Eğer yazılım öğrenmek istiyorsanız, ama nereden başlayacağınızı bilemiyorsanız, bir önceki yazımı okumanızı tavsiye ederim. Yeni başlayacaklar için, önce hangi alanda ilerleyeceğine karar vermek daha doğru bir ilk adım olacaktır.
        <ExternalLink style={{ color: "blue" }} href="https://gokhankaracay.medium.com/ba%C5%9Fl%C4%B1k-gelecek-f5126b96a16e">Story oku</ExternalLink>.

      </>
    ),
  },

  {
    title: 'Yazılım öğrenmeye Python ile başlamak mantıklı mı?',
    content: () => (
      <>
        Soru çok açık, cevap da aynı açıklıkta olsun istiyorum. Fakat bu sorunun cevabı kişiden kişiye değişeceği için kısa cevap vermek zor. Yani aslında cevap hem evet, hem de hayır. Neden mi?
        <ExternalLink style={{ color: "blue" }} href="https://gokhankaracay.medium.com/yaz%C4%B1l%C4%B1m-%C3%B6%C4%9Frenmeye-python-ile-ba%C5%9Flamak-mant%C4%B1kl%C4%B1-m%C4%B1-debb7eb63a71">Story oku</ExternalLink>.

      </>
    ),
  },

  {
    title: 'Yazılıma nereden başladım? Aynı hatayı yapmayın!',
    content: () => (
      <>
        Eski eğitim metodolojilerinden birisi de, öğrenenden öğrenmekmiş derler. Yani bu da ne demek şimdi, dediğinizi duyuyor gibiyim. Açıklayım müsaadenizle...
        <ExternalLink style={{ color: "blue" }} href="https://gokhankaracay.medium.com/yaz%C4%B1l%C4%B1ma-nereden-ba%C5%9Flad%C4%B1m-ayn%C4%B1-hatay%C4%B1-yapmay%C4%B1n-31255f391d82">Story oku</ExternalLink>.

      </>
    ),
  },
  {
    title: 'Evet, doğru! Benim de bir linkim olsun diye yazıyorum',
    content: () => (
      <>
        Hepinize merhaba! Tabi siz şimdi soracaksınız neden yazdığımı. Haklısınız. Açıkçası, kendime bir web sitesi hazırlarken, yukarıda bir yerlerde bir link daha olsun diye başladım yazmaya :) Fakat bu işin başka bir yönü daha var. Onu da size anlatmak istiyorum, dinlemek isterseniz buyurun:
        <ExternalLink style={{ color: "blue" }} href="https://gokhankaracay.medium.com/evet-do%C4%9Fru-benim-de-bir-linkim-olsun-diye-yaz%C4%B1yorum-8958e5cdf7">Story oku</ExternalLink>.
      </>
    ),
  },
];

const Faq = () => (
  <Section id="faq">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Blog </h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
