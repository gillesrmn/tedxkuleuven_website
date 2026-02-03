
import React, { useState } from 'react';
import { useApp, Speaker, TeamMember, Alumnus, TimelineItem, PastEvent, PastEventType } from '../context/AppContext';

const Admin: React.FC = () => {
  const app = useApp();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'event' | 'speakers' | 'team' | 'past_events' | 'partners' | 'recruitment' | 'branding'>('dashboard');

  // Modal States
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
  const [editingAlum, setEditingAlum] = useState<Alumnus | null>(null);
  const [editingSpeaker, setEditingSpeaker] = useState<Speaker | null>(null);
  const [editingPastEvent, setEditingPastEvent] = useState<PastEvent | null>(null);
  const [movingToAlum, setMovingToAlum] = useState<string | null>(null);
  
  const [addingMember, setAddingMember] = useState(false);
  const [addingAlum, setAddingAlum] = useState(false);
  const [addingSpeaker, setAddingSpeaker] = useState(false);
  const [addingPastEvent, setAddingPastEvent] = useState(false);
  const [reviewSub, setReviewSub] = useState<any>(null);

  const handleLogin = () => {
    setIsAuthenticating(true);
    // Simulate Google OAuth Redirect/Popup
    setTimeout(() => {
      setIsAuthenticating(false);
      setIsAuthenticated(true);
    }, 1500);
  };

  // File Handler
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, callback: (base64: string) => void) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => callback(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="bg-background-dark min-h-screen flex items-center justify-center p-6">
        <div className="bg-zinc-900 border border-zinc-800 p-12 rounded-[2.5rem] w-full max-w-md text-center shadow-3xl flex flex-col items-center">
          <div className="bg-primary/10 p-6 rounded-full mb-8">
            <span className="material-symbols-outlined text-primary text-5xl">lock</span>
          </div>
          <h1 className="text-white text-3xl font-black uppercase tracking-tighter mb-4">Admin Access</h1>
          <p className="text-zinc-500 text-sm font-medium mb-10 leading-relaxed">
            Please sign in with your authorized @tedxkuleuven.com workspace account to access the organizing console.
          </p>
          <button 
            onClick={handleLogin}
            disabled={isAuthenticating}
            className="w-full flex items-center justify-center gap-4 bg-white text-black font-black py-4 rounded-xl hover:bg-zinc-200 transition-all uppercase tracking-widest text-xs disabled:opacity-50"
          >
            {isAuthenticating ? (
              <span className="animate-spin material-symbols-outlined">sync</span>
            ) : (
              <>
                <svg className="size-5" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/><path fill="#FF3D00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"/><path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/><path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/></svg>
                Sign in with Google
              </>
            )}
          </button>
        </div>
      </div>
    );
  }

  const handleSaveMember = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const member = {
      id: editingMember?.id || Date.now().toString(),
      name: data.get('name') as string,
      role: data.get('role') as string,
      dept: data.get('dept') as string,
      img: (document.getElementById('img_hidden_member') as HTMLInputElement).value || editingMember?.img || "",
      linkedin: data.get('linkedin') as string,
    };
    if (editingMember) app.setTeam(app.team.map(m => m.id === editingMember.id ? member : m));
    else app.setTeam([...app.team, member]);
    setEditingMember(null); setAddingMember(false);
  };

  const handleSaveAlum = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const alum = {
      id: editingAlum?.id || Date.now().toString(),
      name: data.get('name') as string,
      role: data.get('role') as string,
      year: data.get('year') as string,
      linkedin: data.get('linkedin') as string,
    };
    if (editingAlum) app.setAlumni(app.alumni.map(a => a.id === editingAlum.id ? alum : a));
    else app.setAlumni([...app.alumni, alum]);
    setEditingAlum(null); setAddingAlum(false);
  };

  const handleSaveSpeaker = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const spk = {
      id: editingSpeaker?.id || Date.now().toString(),
      name: data.get('name') as string,
      bio: data.get('bio') as string,
      talkTitle: data.get('talkTitle') as string,
      img: (document.getElementById('img_hidden_speaker') as HTMLInputElement).value || editingSpeaker?.img || "",
      linkedin: data.get('linkedin') as string,
    };
    if (editingSpeaker) app.setSpeakers(app.speakers.map(s => s.id === editingSpeaker.id ? spk : s));
    else app.setSpeakers([...app.speakers, spk]);
    setEditingSpeaker(null); setAddingSpeaker(false);
  };

  const handleSavePastEvent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const ev: PastEvent = {
      id: editingPastEvent?.id || Date.now().toString(),
      type: data.get('type') as PastEventType,
      eventName: data.get('eventName') as string,
      date: data.get('date') as string,
      venue: data.get('venue') as string,
      title: data.get('title') as string,
      speaker: data.get('speaker') as string,
      youtubeUrl: data.get('youtubeUrl') as string,
      flickrUrl: data.get('flickrUrl') as string,
      img: (document.getElementById('img_hidden_pastevent') as HTMLInputElement).value || editingPastEvent?.img || "",
    };
    if (editingPastEvent) app.setPastEvents(app.pastEvents.map(p => p.id === editingPastEvent.id ? ev : p));
    else app.setPastEvents([...app.pastEvents, ev]);
    setEditingPastEvent(null); setAddingPastEvent(false);
  };

  return (
    <div className="bg-background-dark min-h-screen text-white font-display flex flex-col md:flex-row">
      <aside className="w-full md:w-64 bg-zinc-950 border-r border-zinc-800 p-6 flex flex-col gap-8">
        <div className="flex items-center gap-3 px-2">
          <span className="material-symbols-outlined text-primary text-3xl font-black">admin_panel_settings</span>
          <h2 className="text-xl font-black uppercase tracking-tighter">Organizing console</h2>
        </div>
        <nav className="flex flex-col gap-2">
          {[
            { id: 'dashboard', label: 'Ticket Sales', icon: 'payments' },
            { id: 'event', label: 'Upcoming Event', icon: 'event' },
            { id: 'speakers', label: 'Event Speakers', icon: 'mic' },
            { id: 'team', label: 'Team & Alumni', icon: 'groups' },
            { id: 'past_events', label: 'Past Events', icon: 'history' },
            { id: 'partners', label: 'Past Partners', icon: 'handshake' },
            { id: 'recruitment', label: 'Applications', icon: 'person_add' },
            { id: 'branding', label: 'Branding & Socials', icon: 'palette' }
          ].map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as any)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-black uppercase tracking-widest transition-all ${activeTab === item.id ? 'bg-primary text-white shadow-lg' : 'text-zinc-500 hover:text-white hover:bg-zinc-900'}`}
            >
              <span className="material-symbols-outlined text-lg">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
        <button onClick={() => setIsAuthenticated(false)} className="mt-auto flex items-center gap-3 px-4 py-3 text-zinc-600 hover:text-white text-xs font-black uppercase">
          <span className="material-symbols-outlined">logout</span> Log out
        </button>
      </aside>

      <main className="flex-1 p-8 md:p-12 overflow-y-auto">
        <header className="mb-12 border-b border-zinc-800 pb-8 flex justify-between items-end">
          <div>
            <h1 className="text-5xl font-black uppercase tracking-tighter">{activeTab.replace('_', ' ')}</h1>
            <p className="text-zinc-500 font-bold uppercase tracking-widest text-[10px] mt-2">Authenticated as Organizing Team</p>
          </div>
        </header>

        {activeTab === 'dashboard' && (
          <div className="space-y-12 text-left">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { label: 'Total Revenue', value: `€${app.attendees.length * 20}`, icon: 'savings' },
                { label: 'Tickets Sold', value: app.attendees.length, icon: 'confirmation_number' },
                { label: 'Team Members', value: app.team.length, icon: 'groups' }
              ].map((stat, i) => (
                <div key={i} className="bg-zinc-900 border border-zinc-800 p-10 rounded-3xl">
                  <span className="material-symbols-outlined text-primary mb-4 block text-4xl">{stat.icon}</span>
                  <p className="text-zinc-500 text-xs font-black uppercase tracking-widest mb-2">{stat.label}</p>
                  <h3 className="text-5xl font-black">{stat.value}</h3>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'event' && (
          <form onSubmit={(e) => {
            e.preventDefault();
            const d = new FormData(e.currentTarget);
            const timeline: TimelineItem[] = [];
            const ids = d.getAll('id[]') as string[];
            const times = d.getAll('time[]') as string[];
            const activities = d.getAll('activity[]') as string[];
            times.forEach((t, i) => { if (t || activities[i]) timeline.push({ id: ids[i] || Math.random().toString(36).substr(2, 9), time: t, activity: activities[i] }); });

            app.updateEventInfo({
              title: d.get('title') as string,
              date: d.get('date') as string,
              venue: d.get('venue') as string,
              description: d.get('desc') as string,
              remarks: d.get('remarks') as string,
              coverImg: (document.getElementById('img_hidden_cover') as HTMLInputElement).value || app.eventInfo.coverImg,
              timeline
            });
            alert('Event Saved!');
          }} className="max-w-3xl space-y-12 text-left">
            <section className="bg-zinc-900 p-10 rounded-3xl border border-zinc-800">
              <h3 className="text-2xl font-black mb-10 uppercase tracking-tight">Core Event Data</h3>
              <div className="grid gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-zinc-500">Event Title</label>
                  <input name="title" defaultValue={app.eventInfo.title} className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-xl focus:border-primary outline-none" />
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-zinc-500">Date & Time</label>
                    <input name="date" type="datetime-local" defaultValue={app.eventInfo.date} className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-xl focus:border-primary outline-none" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-zinc-500">Venue</label>
                    <input name="venue" defaultValue={app.eventInfo.venue} className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-xl focus:border-primary outline-none" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-zinc-500">Event Cover Image (Removes red hue if set)</label>
                  <input type="file" accept="image/*" onChange={(e) => handleFileUpload(e, b => (document.getElementById('img_hidden_cover') as HTMLInputElement).value = b)} className="w-full text-xs text-zinc-500" />
                  <input type="hidden" id="img_hidden_cover" />
                  {app.eventInfo.coverImg && <img src={app.eventInfo.coverImg} className="mt-4 h-32 w-auto rounded-lg border border-zinc-800" />}
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-zinc-500">Additional Remarks</label>
                  <input name="remarks" defaultValue={app.eventInfo.remarks} className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-xl focus:border-primary outline-none" />
                </div>
                
                <div className="space-y-6 pt-8 border-t border-zinc-800">
                   <label className="text-xs font-black uppercase tracking-widest text-zinc-500">Event Timeline</label>
                   <div className="space-y-4" id="timeline-container">
                      {app.eventInfo.timeline.map((item) => (
                        <div key={item.id} className="flex gap-4 items-center">
                          <input type="hidden" name="id[]" value={item.id} />
                          <input name="time[]" defaultValue={item.time} className="w-24 bg-zinc-950 border border-zinc-800 p-3 rounded-lg outline-none" placeholder="Time" />
                          <input name="activity[]" defaultValue={item.activity} className="flex-1 bg-zinc-950 border border-zinc-800 p-3 rounded-lg outline-none" placeholder="Activity" />
                          <button type="button" onClick={(e) => e.currentTarget.parentElement?.remove()} className="text-zinc-600 hover:text-red-500"><span className="material-symbols-outlined">delete</span></button>
                        </div>
                      ))}
                      <div id="add-time-anchor"></div>
                      <button type="button" onClick={() => {
                        const anchor = document.getElementById('add-time-anchor');
                        const div = document.createElement('div');
                        div.className = "flex gap-4 items-center mb-4";
                        div.innerHTML = `<input type="hidden" name="id[]" value="" /><input name="time[]" class="w-24 bg-zinc-950 border border-zinc-800 p-3 rounded-lg outline-none" placeholder="Time" /><input name="activity[]" class="flex-1 bg-zinc-950 border border-zinc-800 p-3 rounded-lg outline-none" placeholder="Activity" />`;
                        const delBtn = document.createElement('button');
                        delBtn.type = "button"; delBtn.className = "text-zinc-600 hover:text-red-500";
                        delBtn.innerHTML = `<span class="material-symbols-outlined">delete</span>`;
                        delBtn.onclick = () => div.remove();
                        div.appendChild(delBtn);
                        anchor?.parentElement?.insertBefore(div, anchor);
                      }} className="w-full border-2 border-dashed border-zinc-800 p-4 rounded-xl text-zinc-500 hover:text-white transition-all text-sm font-black uppercase flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined">add</span> Add Time
                      </button>
                   </div>
                </div>
              </div>
              <button type="submit" className="mt-10 bg-primary text-white px-12 py-4 rounded-xl font-black uppercase text-sm">Save Changes</button>
            </section>
          </form>
        )}

        {activeTab === 'speakers' && (
          <section className="bg-zinc-900 p-10 rounded-3xl border border-zinc-800 text-left">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-2xl font-black uppercase">Event Speakers</h3>
              <button onClick={() => setAddingSpeaker(true)} className="bg-primary px-8 py-3 rounded-xl font-black uppercase text-xs">Add Speaker</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {app.speakers.map(s => (
                <div key={s.id} className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800 flex items-center gap-6">
                  <img src={s.img} className="size-20 rounded-xl object-cover" />
                  <div className="flex-1">
                    <p className="font-black uppercase tracking-tight text-lg">{s.name}</p>
                    <p className="text-primary text-[10px] font-black uppercase italic">{s.talkTitle}</p>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => setEditingSpeaker(s)} className="text-zinc-600 hover:text-white"><span className="material-symbols-outlined">edit</span></button>
                    <button onClick={() => app.setSpeakers(app.speakers.filter(x => x.id !== s.id))} className="text-zinc-600 hover:text-red-500"><span className="material-symbols-outlined">delete</span></button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'team' && (
          <div className="space-y-12 text-left">
            <section className="bg-zinc-900 p-10 rounded-3xl border border-zinc-800">
              <div className="flex justify-between items-center mb-10">
                <h3 className="text-2xl font-black uppercase">Current Team</h3>
                <button onClick={() => setAddingMember(true)} className="bg-primary px-8 py-3 rounded-xl font-black uppercase text-xs">Add Member</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {app.team.map(m => (
                  <div key={m.id} className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800 flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <img src={m.img} className="size-16 rounded-full object-cover" />
                      <div className="flex-1">
                        <p className="font-black uppercase text-sm">{m.name}</p>
                        <p className="text-[10px] text-zinc-500 font-bold uppercase">{m.role}</p>
                      </div>
                    </div>
                    <div className="flex gap-2 pt-4 border-t border-zinc-800">
                      <button onClick={() => setEditingMember(m)} className="flex-1 bg-zinc-800 py-2 rounded text-[10px] font-black uppercase">Edit</button>
                      <button onClick={() => setMovingToAlum(m.id)} className="flex-1 bg-zinc-800 py-2 rounded text-[10px] font-black uppercase hover:bg-primary">To Alumni</button>
                      <button onClick={() => app.setTeam(app.team.filter(x => x.id !== m.id))} className="bg-zinc-800 px-3 rounded text-zinc-600 hover:text-red-500"><span className="material-symbols-outlined text-sm">delete</span></button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-zinc-900 p-10 rounded-3xl border border-zinc-800">
              <div className="flex justify-between items-center mb-10">
                <h3 className="text-2xl font-black uppercase">Alumni Archive</h3>
                <button onClick={() => setAddingAlum(true)} className="bg-zinc-800 px-8 py-3 rounded-xl font-black uppercase text-xs">Add Alumnus</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {app.alumni.map(a => (
                  <div key={a.id} className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800 flex justify-between items-center group">
                    <div className="text-left">
                      <p className="font-black uppercase text-sm">{a.name}</p>
                      <p className="text-[10px] text-zinc-500 font-bold uppercase">{a.year} • {a.role}</p>
                    </div>
                    <div className="flex gap-2">
                       <button onClick={() => setEditingAlum(a)} className="text-zinc-600 hover:text-white"><span className="material-symbols-outlined text-sm">edit</span></button>
                       <button onClick={() => app.setAlumni(app.alumni.filter(x => x.id !== a.id))} className="text-zinc-700 hover:text-red-500"><span className="material-symbols-outlined text-sm">delete</span></button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'past_events' && (
          <section className="bg-zinc-900 p-10 rounded-3xl border border-zinc-800 text-left">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-2xl font-black uppercase">Archived Content</h3>
              <button onClick={() => setAddingPastEvent(true)} className="bg-primary px-8 py-3 rounded-xl font-black uppercase text-xs">Archive New</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {app.pastEvents.map(ev => (
                <div key={ev.id} className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800 flex items-center gap-6">
                  <img src={ev.img} className="w-24 h-16 rounded-xl object-cover" />
                  <div className="flex-1">
                    <p className="font-black uppercase text-sm">{ev.type === 'talk' ? ev.title : 'Gallery'}</p>
                    <p className="text-zinc-500 text-[10px] font-black uppercase">{ev.eventName}</p>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => setEditingPastEvent(ev)} className="text-zinc-600 hover:text-white"><span className="material-symbols-outlined">edit</span></button>
                    <button onClick={() => app.setPastEvents(app.pastEvents.filter(x => x.id !== ev.id))} className="text-zinc-600 hover:text-red-500"><span className="material-symbols-outlined">delete</span></button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'partners' && (
           <section className="bg-zinc-900 p-10 rounded-3xl border border-zinc-800 text-left">
             <h3 className="text-2xl font-black uppercase mb-10">Past Partners</h3>
             <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {app.pastPartners.map((p, i) => (
                    <div key={i} className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 flex items-center gap-4">
                      <img src={p.logo} className="h-10 w-10 object-contain" />
                      <span className="font-black uppercase text-xs flex-1">{p.name}</span>
                      <button onClick={() => app.setPastPartners(app.pastPartners.filter((_, idx) => idx !== i))} className="text-zinc-600 hover:text-red-500"><span className="material-symbols-outlined text-sm">delete</span></button>
                    </div>
                  ))}
                </div>
                <div className="border-t border-zinc-800 pt-10">
                   <h4 className="text-xs font-black uppercase text-zinc-500 mb-6">Add New Partner</h4>
                   <div className="flex flex-col md:flex-row gap-4">
                      <input id="new_partner_name" placeholder="Partner Name" className="flex-1 bg-zinc-950 border border-zinc-800 p-4 rounded-xl outline-none" />
                      <div className="flex-1 space-y-2">
                        <input type="file" onChange={(e) => handleFileUpload(e, b => (document.getElementById('hidden_partner_logo') as HTMLInputElement).value = b)} className="text-xs" />
                        <input type="hidden" id="hidden_partner_logo" />
                      </div>
                      <button onClick={() => {
                        const name = (document.getElementById('new_partner_name') as HTMLInputElement).value;
                        const logo = (document.getElementById('hidden_partner_logo') as HTMLInputElement).value;
                        if (name && logo) app.setPastPartners([...app.pastPartners, { name, logo }]);
                      }} className="bg-zinc-800 px-10 py-4 rounded-xl font-black uppercase text-xs">Add</button>
                   </div>
                </div>
             </div>
           </section>
        )}

        {activeTab === 'branding' && (
          <div className="max-w-xl text-left space-y-12">
            <section className="bg-zinc-900 p-10 rounded-3xl border border-zinc-800">
              <h3 className="text-2xl font-black mb-10 uppercase">Identity</h3>
              <div className="space-y-6">
                <label className="text-xs font-black uppercase text-zinc-500 block">Logo URL</label>
                <input value={app.logo} onChange={e => app.setLogo(e.target.value)} className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-xl outline-none" />
              </div>
            </section>
            <section className="bg-zinc-900 p-10 rounded-3xl border border-zinc-800">
              <h3 className="text-2xl font-black mb-10 uppercase">Social Media</h3>
              <div className="space-y-6">
                {Object.keys(app.socialLinks).map(key => (
                  <div key={key}>
                    <label className="text-xs font-black uppercase text-zinc-500 block mb-2">{key}</label>
                    <input 
                      value={(app.socialLinks as any)[key]} 
                      onChange={e => app.setSocialLinks({ ...app.socialLinks, [key]: e.target.value })} 
                      className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-xl outline-none" 
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'recruitment' && (
          <section className="bg-zinc-900 p-10 rounded-3xl border border-zinc-800 text-left">
            <h3 className="text-2xl font-black uppercase mb-10">Team Submissions</h3>
            <div className="space-y-4">
              {app.submissions.length === 0 ? <p className="text-zinc-600 italic">No applications yet.</p> :
               app.submissions.map(sub => (
                <div key={sub.id} className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800 flex justify-between items-center">
                  <div>
                    <p className="font-black text-white">{sub.firstName} {sub.lastName}</p>
                    <p className="text-[10px] text-primary font-black uppercase">{sub.dept} Dept</p>
                  </div>
                  <button onClick={() => setReviewSub(sub)} className="bg-zinc-800 px-6 py-2 rounded-lg text-xs font-black uppercase">Review</button>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* MODALS */}
      {(addingMember || editingMember) && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] flex items-center justify-center p-6">
          <div className="bg-zinc-900 border border-zinc-800 p-10 rounded-[2.5rem] w-full max-w-xl text-left shadow-3xl">
            <h2 className="text-3xl font-black uppercase mb-8">{editingMember ? 'Edit' : 'Add'} Member</h2>
            <form onSubmit={handleSaveMember} className="space-y-6">
              <input name="name" defaultValue={editingMember?.name} placeholder="Full Name" required className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-xl outline-none" />
              <input name="role" defaultValue={editingMember?.role} placeholder="President, Vice-President, etc." required className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-xl outline-none" />
              <select name="dept" defaultValue={editingMember?.dept} className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-xl outline-none">
                <option>Executive</option><option>Marketing</option><option>Curation</option><option>Production</option><option>Finance</option><option>Operations</option>
              </select>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase text-zinc-500">Profile Photo</label>
                <input type="file" accept="image/*" onChange={(e) => handleFileUpload(e, (b) => (document.getElementById('img_hidden_member') as HTMLInputElement).value = b)} className="w-full text-xs text-zinc-500" />
                <input type="hidden" id="img_hidden_member" />
              </div>
              <input name="linkedin" defaultValue={editingMember?.linkedin} placeholder="LinkedIn URL" className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-xl outline-none" />
              <div className="flex gap-4 pt-6">
                <button type="submit" className="bg-primary text-white px-10 py-4 rounded-xl font-black uppercase text-xs">Save</button>
                <button type="button" onClick={() => {setAddingMember(false); setEditingMember(null);}} className="bg-zinc-800 text-white px-10 py-4 rounded-xl font-black uppercase text-xs">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {(addingSpeaker || editingSpeaker) && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] flex items-center justify-center p-6">
          <div className="bg-zinc-900 border border-zinc-800 p-10 rounded-[2.5rem] w-full max-w-xl text-left shadow-3xl">
            <h2 className="text-3xl font-black uppercase mb-8">{editingSpeaker ? 'Edit' : 'Add'} Speaker</h2>
            <form onSubmit={handleSaveSpeaker} className="space-y-6">
              <input name="name" defaultValue={editingSpeaker?.name} placeholder="Speaker Name" required className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-xl outline-none" />
              <input name="talkTitle" defaultValue={editingSpeaker?.talkTitle} placeholder="Talk Title" required className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-xl outline-none" />
              <textarea name="bio" defaultValue={editingSpeaker?.bio} placeholder="Short Bio" required className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-xl outline-none min-h-[100px]" />
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase text-zinc-500">Photo</label>
                <input type="file" accept="image/*" onChange={(e) => handleFileUpload(e, (b) => (document.getElementById('img_hidden_speaker') as HTMLInputElement).value = b)} className="w-full text-xs text-zinc-500" />
                <input type="hidden" id="img_hidden_speaker" />
              </div>
              <input name="linkedin" defaultValue={editingSpeaker?.linkedin} placeholder="LinkedIn URL" className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-xl outline-none" />
              <div className="flex gap-4 pt-6">
                <button type="submit" className="bg-primary text-white px-10 py-4 rounded-xl font-black uppercase text-xs">Save</button>
                <button type="button" onClick={() => {setAddingSpeaker(false); setEditingSpeaker(null);}} className="bg-zinc-800 text-white px-10 py-4 rounded-xl font-black uppercase text-xs">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {(addingAlum || editingAlum) && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] flex items-center justify-center p-6">
          <div className="bg-zinc-900 border border-zinc-800 p-10 rounded-[2.5rem] w-full max-w-xl text-left shadow-3xl">
            <h2 className="text-3xl font-black uppercase mb-8">{editingAlum ? 'Edit' : 'Add'} Alumnus</h2>
            <form onSubmit={handleSaveAlum} className="space-y-6">
              <input name="name" defaultValue={editingAlum?.name} placeholder="Full Name" required className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-xl outline-none" />
              <input name="role" defaultValue={editingAlum?.role} placeholder="Role" required className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-xl outline-none" />
              <input name="year" defaultValue={editingAlum?.year} placeholder="Active Years (e.g. 2020-2022)" required className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-xl outline-none" />
              <input name="linkedin" defaultValue={editingAlum?.linkedin} placeholder="LinkedIn URL" className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-xl outline-none" />
              <div className="flex gap-4 pt-6">
                <button type="submit" className="bg-primary text-white px-10 py-4 rounded-xl font-black uppercase text-xs">Save</button>
                <button type="button" onClick={() => {setAddingAlum(false); setEditingAlum(null);}} className="bg-zinc-800 text-white px-10 py-4 rounded-xl font-black uppercase text-xs">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {(addingPastEvent || editingPastEvent) && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] flex items-center justify-center p-6">
          <div className="bg-zinc-900 border border-zinc-800 p-10 rounded-[2.5rem] w-full max-w-xl text-left shadow-3xl overflow-y-auto max-h-[90vh]">
            <h2 className="text-3xl font-black uppercase mb-8">{editingPastEvent ? 'Edit' : 'Add'} Past Item</h2>
            <form onSubmit={handleSavePastEvent} className="space-y-6">
              <div className="flex gap-6 mb-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="type" value="talk" defaultChecked={editingPastEvent?.type === 'talk' || true} className="text-primary" />
                  <span className="font-bold uppercase text-xs">Talk</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="type" value="photo" defaultChecked={editingPastEvent?.type === 'photo'} className="text-primary" />
                  <span className="font-bold uppercase text-xs">Photos</span>
                </label>
              </div>
              <input name="eventName" defaultValue={editingPastEvent?.eventName} placeholder="Event Name (e.g. Beyond Boundaries)" required className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-xl outline-none" />
              <input name="date" defaultValue={editingPastEvent?.date} placeholder="Year/Date (e.g. 2023)" required className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-xl outline-none" />
              
              <div className="space-y-6 border-t border-zinc-800 pt-6">
                <p className="text-[10px] font-black uppercase text-zinc-500">For Talks only:</p>
                <input name="title" defaultValue={editingPastEvent?.title} placeholder="Talk Title" className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-xl outline-none" />
                <input name="speaker" defaultValue={editingPastEvent?.speaker} placeholder="Speaker Name" className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-xl outline-none" />
                <input name="youtubeUrl" defaultValue={editingPastEvent?.youtubeUrl} placeholder="YouTube URL" className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-xl outline-none" />
              </div>
              
              <div className="space-y-6 border-t border-zinc-800 pt-6">
                <p className="text-[10px] font-black uppercase text-zinc-500">For Photos only:</p>
                <input name="flickrUrl" defaultValue={editingPastEvent?.flickrUrl} placeholder="Flickr Gallery URL" className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-xl outline-none" />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase text-zinc-500">Thumbnail / Cover</label>
                <input type="file" accept="image/*" onChange={(e) => handleFileUpload(e, (b) => (document.getElementById('img_hidden_pastevent') as HTMLInputElement).value = b)} className="w-full text-xs text-zinc-500" />
                <input type="hidden" id="img_hidden_pastevent" />
              </div>
              <div className="flex gap-4 pt-6">
                <button type="submit" className="bg-primary text-white px-10 py-4 rounded-xl font-black uppercase text-xs">Save</button>
                <button type="button" onClick={() => {setAddingPastEvent(false); setEditingPastEvent(null);}} className="bg-zinc-800 text-white px-10 py-4 rounded-xl font-black uppercase text-xs">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {movingToAlum && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] flex items-center justify-center p-6">
          <div className="bg-zinc-900 border border-zinc-800 p-10 rounded-[2.5rem] w-full max-w-sm text-left shadow-3xl">
             <h2 className="text-2xl font-black uppercase tracking-tighter mb-4 text-white">Archive Member</h2>
             <p className="text-zinc-400 text-sm mb-8 font-medium">Archive removes picture and sets year. Specify active years below.</p>
             <input id="alum_year" placeholder="e.g. 2023-2024" className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-xl outline-none mb-6 text-white" />
             <div className="flex gap-4">
                <button onClick={() => {
                  const year = (document.getElementById('alum_year') as HTMLInputElement).value;
                  app.moveToAlumni(movingToAlum, year);
                  setMovingToAlum(null);
                }} className="bg-primary text-white px-8 py-3 rounded-xl font-black uppercase text-xs">Confirm</button>
                <button onClick={() => setMovingToAlum(null)} className="bg-zinc-800 text-white px-8 py-3 rounded-xl font-black uppercase text-xs">Cancel</button>
             </div>
          </div>
        </div>
      )}

      {reviewSub && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] flex items-center justify-center p-6">
          <div className="bg-zinc-900 border border-zinc-800 p-10 rounded-[2.5rem] w-full max-w-2xl text-left shadow-3xl overflow-y-auto max-h-[80vh]">
            <h2 className="text-3xl font-black uppercase tracking-tighter mb-4">Application Review</h2>
            <p className="text-primary font-black uppercase text-[10px] tracking-widest mb-10">{reviewSub.dept} Department</p>
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-8">
                <div><p className="text-[10px] uppercase font-black text-zinc-500 mb-1">Name</p><p className="font-bold">{reviewSub.firstName} {reviewSub.lastName}</p></div>
                <div><p className="text-[10px] uppercase font-black text-zinc-500 mb-1">Email</p><p className="font-bold">{reviewSub.email}</p></div>
              </div>
              <div><p className="text-[10px] uppercase font-black text-zinc-500 mb-1">Motivation</p><p className="text-zinc-400 font-medium leading-relaxed">{reviewSub.motivation}</p></div>
            </div>
            <button onClick={() => setReviewSub(null)} className="mt-12 bg-zinc-800 text-white px-10 py-4 rounded-xl font-black uppercase text-xs">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
