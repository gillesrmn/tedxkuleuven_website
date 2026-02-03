
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="bg-background-dark">
      {/* Hero Section */}
      <div className="relative w-full h-[85vh] min-h-[600px] overflow-hidden bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] hover:scale-110" 
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.2) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuB98LYC6jWJ9omAYOWRBPeqaIr9Oi3hvPoiGtOvj7Sep90YYERDPyC_MBOHgCWHttx3YOc3uzPhf_gB849okSL-QU60sntdINb0yvQDnX1w2Csh4dvUzuB8vi7Dvlun5GD7UkCORWrcjlQ8OlMsctmV3fQbhJzsUpH5TRroeBcG-SZ8BLu-yXqzFoKS2gjMOjPmzFvwgRe_z9m9m5KGkgBmbeNDS6kLQ4uf0v5xQPSF5UJSoDG1RPHXg7qCMKC5zmsloihffw4EnW8")`
          }}
        ></div>
        <div className="relative mx-auto max-w-[1400px] h-full flex flex-col justify-center px-6 md:px-12 text-left">
          <div className="flex flex-col gap-8 max-w-3xl animate-fadeIn">
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-12 bg-primary"></div>
              <span className="text-primary text-sm font-black uppercase tracking-[0.3em]">Leuven, Belgium</span>
            </div>
            <h1 className="text-white text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter">
              IDEAS WORTH<br/><span className="text-primary italic">SPREADING.</span>
            </h1>
            <p className="text-zinc-300 text-lg md:text-2xl font-medium leading-relaxed max-w-xl">
              Empowering the KU Leuven community through transformative stories and local innovation. Join the conversation that shapes our global future.
            </p>
            <div className="flex flex-wrap gap-5 mt-4">
              <Link to="/tickets" className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-none h-14 px-8 bg-primary text-white text-base font-black uppercase tracking-widest hover:bg-red-700 transition-all">
                Get Tickets
              </Link>
              <Link to="/events" className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-none h-14 px-8 bg-transparent text-white border-2 border-white text-base font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                Watch Talks
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="py-24 border-b border-zinc-900">
        <div className="mx-auto max-w-[1400px] px-6 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-6">
              <h2 className="text-primary text-sm font-black uppercase tracking-[0.3em]">Our Impact</h2>
              <h3 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter text-white">
                Bringing the TED spirit to the heart of Leuven.
              </h3>
            </div>
            <div className="flex flex-col gap-8">
              <p className="text-zinc-400 text-xl leading-relaxed">
                We are a non-profit platform for researchers, students, and local changemakers to share their unique perspectives with the world. Our mission is to spark deep discussion and connection.
              </p>
              <div className="grid grid-cols-2 gap-8 text-white">
                <div>
                  <div className="text-4xl font-black text-primary">15+</div>
                  <div className="text-sm font-bold uppercase tracking-widest mt-2">Annual Events</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-primary">120+</div>
                  <div className="text-sm font-bold uppercase tracking-widest mt-2">Global Speakers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid - Updated style to match partner benefits */}
      <div className="py-24 bg-black">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'calendar_today', title: 'Flagship Events', desc: 'Our annual conferences bring together hundreds of thinkers for a full day of inspiration and multidisciplinary talks.' },
              { icon: 'mic_external_on', title: 'Diverse Voices', desc: 'From student activists to industry leaders, we platform the voices that are redefining the boundaries of knowledge.' },
              { icon: 'groups', title: 'Active Community', desc: 'Join a vibrant network of over 2,000 members in the Leuven ecosystem, building connections that last beyond the stage.' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-6 rounded-xl border border-zinc-800 bg-zinc-900/50 p-12 hover:border-primary/50 transition-all group text-left">
                <span className="material-symbols-outlined text-primary text-4xl">{item.icon}</span>
                <h4 className="text-2xl font-black uppercase tracking-tight text-white">{item.title}</h4>
                <p className="text-zinc-400 text-lg leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Experience / Gallery Section */}
      <div className="bg-[#0a0a0a] py-24">
        <div className="mx-auto max-w-[1400px] px-6 text-left">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-primary text-sm font-black uppercase tracking-[0.3em] mb-4">The Experience</h2>
              <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase">Capturing the Spark</h3>
            </div>
            <Link to="/past-events" className="group text-primary font-black uppercase tracking-widest flex items-center gap-3 text-sm hover:translate-x-2 transition-transform">
              View Full Archive
              <span className="material-symbols-outlined font-black">arrow_right_alt</span>
            </Link>
          </div>
          <div className="masonry-grid">
            {[
              "https://lh3.googleusercontent.com/aida-public/AB6AXuBipm3QF96uFLbz22y_3-me9Q_0wrC01NfUP_2SLSybyPbo7RNfHUsrKVDR7oY57s6nAPSMHmfgyj9GbLSLe1rtIW1CG_u_0Doy976ID8mbGe7B16RtQQtvg1dZbUUPHOYVn1UHmRdx-94NjRHQ0xASAQMmKsfWoHEWm0qwlS_vM9ugjIw0SgjlcxP4V3IHJ-NJyUPm-R3lcuUMJiwimhJFxQemywAipNfx-Sc-YCbCDCLoC3LLbSfq2CiU35X1YJkH5ejjXPazalM",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuBR93gMo0w_S7HkGCCXd5hi8-sR9cjNlPQyfO4sEl7pf7qeZ7UHVFqQAeRhaJtWbOEFkBQCf50QiwjfbUev6KSJ_NowUcbhPyHGLi2pgsYTs94Tco2t8iAEQsYsPa-DuSRVJW4NIadpra2unS64u867z_CF8jCslbAqYzCN3_HkBWewertCwW0WVsxLNOuSmN-c_GeteY5GA9lJafa1BivhOG8XvCwuJkYo6UOXwN0KNsBtzkXUIUKtTgrXjfE_rK18bBmS4H2-FB4",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuDZZ3P3THvJkInbkm_EGdUZOGO5jOcGFlfTFgaryLXSNzbzpOWKm98cEYPY4QZoh05Euw0EqvwKN_zmFNn7K1Xl3fTjN3Ukbc7wgvPk29R6M51y9qHnJHXWx_QHPafVB0WRp2WiGvhHWtoYCIQPAmHkyzKRBmPpTUPbhq2eKZOkH0MdtMjNaOYPOUvV7qJLD7bYBXsd-tudlBUGeqsmtOgoo1N9zwcIKmhe05APZyndo0UYwx1Srpekm0v-3tZ1muHr_k-3qXqVqXI",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuCQdYO24sL8wP52KXnsIRw-3tHgfUt1_slmFqBjBQZxxJnQCoN12sL0fPdy2bJilFRRX6X--G1iBrMULX5TJunntd8UDglkddGQrYfto1iQKtpS-RiH67atMIZiCMS1lbrQ65P-Z7pZuXUy4GqaXAHO0okD3FDT1rQVeZk_YbXSIGoEAC7I_5dnAgTfpbHYcAR9beSWpucIZoQA02dJj2AhBCJBEXynqv19RjOT14RcEo9cBtLJbd-u6YcQ3bXJfDTWMghygH04moI",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuCuCzX1YZO4GF8QDkjVZgLKE6ItNWzA06GYZIW0h0ZjkkoPAV6ct-EBiKqGyM-mZtk6xP1O-AT5zP28kVfZM1O_eV5tkcDdaVvnY71A6-e0qNIXR-V8lKMeKrOj9HOtc-1QPahIMLPLo0N_9Z3KtlwsXg09tC-TRXcCJXXtuncNznYZHsHi0Nsp1b9fYqKo2x0YbOJrwSsyr5C7Nr0L8C-a6S9__23BcXvtt6WLfztFatk2-38HhHSaVu6ool713KHo-7quaS7VGVo",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuDtwt_wDHwFxVlynh8m9qIyLxBeOnDDcuYQ7f0XS8ZtGQgcRxz4HhLUl4Mf0lJzlPtTnJbMyLOu7mKP1U3g4IZnQTRIDFM9aXhW45SpBEqzWYhbryCU_wzTOKGtH2py1awTpPDGO-qOdA4mgZTccZnTUaMYHZnNOq-X-_ARnmFg_mcCAh951q7CcEJ1XuiGl4VUqM2YwUAzbQe5ksDKTcK0RdMWMHGddCDPcaCdFPTZnwQGONd-jroFIdRmrTUjov6tHlHzvqXsmoA"
            ].map((src, i) => (
              <div key={i} className="masonry-item relative group overflow-hidden bg-zinc-800 rounded-xl">
                <img alt={`TEDx Experience ${i+1}`} className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 cursor-zoom-in" src={src} />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary py-24">
        <div className="mx-auto max-w-[1400px] px-6 text-center flex flex-col items-center">
          <h2 className="text-white text-5xl md:text-7xl font-black tracking-tighter mb-8 uppercase">READY TO BE PART<br/>OF THE STORY?</h2>
          <p className="text-white/90 text-xl md:text-2xl max-w-2xl font-medium mb-12">Whether you want to speak, volunteer, or attend, there's a place for you in our community.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/join" className="bg-white text-primary px-10 py-5 font-black uppercase tracking-[0.2em] text-sm hover:bg-black hover:text-white transition-all shadow-2xl">Join the Team</Link>
            <Link to="/apply-speaker" className="bg-transparent border-2 border-white text-white px-10 py-5 font-black uppercase tracking-[0.2em] text-sm hover:bg-white hover:text-primary transition-all">Become a Speaker</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
