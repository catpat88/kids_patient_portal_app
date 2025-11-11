export default function Footer() {
  return (
    <footer className="mt-12 border-t">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <img src="/logo-hippo.png" alt="Healthy Hippo" className="h-12 mb-2" />
          <div className="text-sm text-ink/70">© {new Date().getFullYear()} Healthy Hippo Hub</div>
        </div>

        <div className="text-sm">
          <div className="font-semibold">Quick Links</div>
          <ul className="mt-2 space-y-1">
            <li><a className="hover:underline" href="#profile">My Profile</a></li>
            <li><a className="hover:underline" href="#visit">My Visit</a></li>
            <li><a className="hover:underline" href="#videos">Videos</a></li>
            <li><a className="hover:underline" href="#departments">Departments</a></li>
          </ul>
        </div>

        <div className="text-sm">
          <div className="font-semibold">Contact / Help</div>
          <div className="mt-2">Reception: 07775 5278 232</div>
          <div>Email: contact@healthyhippo.ex</div>
        </div>
      </div>
    </footer>
  );
}
