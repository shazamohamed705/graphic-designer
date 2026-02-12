import { useState } from 'react';

function ComentSection() {
  const [formData, setFormData] = useState({
    comment: '',
    name: '',
    email: '',
    website: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Comment submitted:', formData);
    // Handle form submission here
  };

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-10 ml-40">
      <div className="max-w-4xl ml-8 sm:ml-12 lg:ml-16">
        <div className="p-6 sm:p-8 lg:p-10 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-2">
            Post A Comment
          </h2>
          <p className="text-black mb-8">
            Your email address will not be published *
          </p>

          <form onSubmit={handleSubmit} className="space-y-7">
            {/* Comment Textarea */}
            <div>
              <textarea
                name="comment"
                value={formData.comment}
                onChange={handleInputChange}
                placeholder="Your Comment"
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none text-gray-700 placeholder-gray-400"
                required
              />
            </div>

            {/* Input Fields Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-gray-700 placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-gray-700 placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  placeholder="Website"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-gray-700 placeholder-gray-400"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="btn-wave bg-black text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                <span className="letter">S</span>
                <span className="letter">e</span>
                <span className="letter">n</span>
                <span className="letter">d</span>
                <span className="letter">&nbsp;</span>
                <span className="letter">C</span>
                <span className="letter">o</span>
                <span className="letter">m</span>
                <span className="letter">m</span>
                <span className="letter">e</span>
                <span className="letter">n</span>
                <span className="letter">t</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ComentSection;