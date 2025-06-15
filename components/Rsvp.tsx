"use client";
import { useState } from "react";
import { Input } from "./ui/input";
import { motion } from "framer-motion";

type Attendee = string;

export default function Rsvp() {
  // TODO: 이 URL을 실제 카카오뱅크 송금 링크로 교체
  const kakaoBankUrl =
    "https://link.kakaobank.com/send/transfer-web?app_if=kakaobank";

  const [attendees, setAttendees] = useState<Attendee[]>([
    "Hazy",
    "Bob",
    "Sage",
    "Mickey",
    "Miney",
    "Hailey",
  ]);
  const duplicatedAttendees =
    attendees.length > 0 ? [...attendees] : [];

  const [showRsvpForm, setShowRsvpForm] = useState(false);
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleRsvp = () => {
    if (!name.trim()) {
      setError("이름을 입력해주세요.");
      return;
    }
    setAttendees([...attendees, name.trim()]);
    setName("");
    setError("");
    setShowRsvpForm(false);
    setSubmitted(true);
  };

  return (
    <section className="w-full min-h-screen mx-auto flex flex-col bg-gray-50 dark:bg-gray-900">
      <div className="flex justify-center items-center mt-10">
        <h2 className="font-dmserif text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-10 text-gray-900 dark:text-white">
          RSVP
          <div className="mt-4 w-20 h-0.5 bg-gray-200 dark:bg-gray-700 mx-auto mb-3 rounded" />
        </h2>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        {submitted ? (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white font-bold p-4 bg-green-500 rounded-lg"
          >
            Thanks! Your attendance is confirmed.
          </motion.p>
        ) : (
          <>
            {!showRsvpForm && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-center gap-4"
              >
                <button
                  onClick={() => setShowRsvpForm(true)}
                  className="bg-gray-200 hover:bg-yellow-500 text-black font-bold py-3 px-6 text-lg transition-transform transform hover:scale-105 rounded-lg"
                >
                  Going!
                </button>
                <button
                  className="bg-gray-200 border-gray-200 text-yellow hover:bg-yellow-500 hover:text-black font-bold py-3 px-6 text-lg transition-transform transform hover:scale-105 rounded-lg"
                  onClick={() =>
                    alert("That's a shame! Hope to see you next time.")
                  }
                >
                  Not Going
                </button>
              </motion.div>
            )}

            {showRsvpForm && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4 max-w-sm mx-auto"
              >
                <Input
                  type="text"
                  placeholder="Please enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-gray-800 border-brand-gold/50 text-white text-center text-lg h-12 rounded-lg"
                />
                {error && (
                  <p className="text-red-400 text-sm text-center">{error}</p>
                )}
                <button
                  onClick={handleRsvp}
                  className="w-full bg-gray-200 hover:bg-yellow-500 text-black font-bold px-3 py-3 text-lg rounded-lg"
                >
                  Register Attendance
                </button>
              </motion.div>
            )}
          </>
        )}
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-16">
        <div className="text-center mb-5">
          <div className="text-xl font-bold text-gray-600 dark:text-white">Attendee List</div>
          <div className="mt-3 w-16 h-0.5 bg-gray-600 dark:bg-white rounded mx-auto"></div>
        </div>
        <div className="bg-gray-900/70 rounded-lg py-4 overflow-hidden">
          {attendees.length > 0 ? (
            <ul className="flex animate-marquee whitespace-nowrap">
              {duplicatedAttendees.map((attendee, index) => (
                <li
                  key={index}
                  className="bg-gray-800/80 py-2 px-4 rounded-md text-gray-200 mx-2 flex-shrink-0"
                >
                  {attendee}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400 text-center">No Attendees Yet.</p>
          )}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-16 mb-16">
        <div className="text-center mb-5">
          <div className="text-xl font-bold text-gray-600 dark:text-white">Participation Fee</div>
          <div className="mt-3 w-16 h-0.5 bg-gray-600 dark:bg-white rounded mx-auto"></div>
        </div>
        <p className="text-gray-700 dark:text-gray-200 text-center mb-6">
          We're asking for 20,000 won fee to join the party!
        </p>
        <div className="flex justify-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="bg-brand-gold hover:bg-yellow-500 text-black font-bold py-3 px-8 text-lg rounded-lg"
          >
            <a href={kakaoBankUrl} target="_blank" rel="noopener noreferrer">
              카카오뱅크로 송금하기
            </a>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
