import { Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#FCF9F8] border-t border-gray-200 px-12 py-16 text-sm text-gray-600">
      <div className="grid md:grid-cols-4 gap-16">
        <div>
          <img src="../src/images/logo_image.png" alt="" />
          <p className="leading-relaxed">
            Building a bridge between local needs and global hearts.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <p>About Us</p>
          <p>Our Projects</p>
          <p>Volunteer Hub</p>
          <p>Success Stories</p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Resources</h4>
          <p>Documentation</p>
          <p>Community Guidelines</p>
          <p>Safety Portal</p>
          <p>FAQ</p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Newsletter</h4>
          <p className="mb-4 text-sm text-gray-500">
            Stay updated with our latest projects and impact stories. Subscribe
            to our newsletter.
          </p>
          <div className="flex items-center gap-3 mt-2">
            <input
              placeholder="Email"
              className="px-4 py-3 rounded-xl border border-gray-200 outline-none flex-1 bg-white"
            />

            <button className="p-3 rounded-xl bg-[#6B8E23] flex items-center justify-center hover:scale-105 transition">
              <Send size={18} className="text-white" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t pt-6 text-xs text-gray-400 flex justify-between">
        <span>© 2026 Community Impact Platform</span>
        <div className="flex gap-6">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}
