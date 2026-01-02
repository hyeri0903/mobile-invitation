"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Input } from "./ui/input";

type GuestMessage = {
  id: string;
  name: string;
  message: string;
  date: string;
};

export default function Guestbook() {
  const [messages, setMessages] = useState<GuestMessage[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Load messages from API on mount
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch('/api/guestbook');
        if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data)) {
            setMessages(data);
          }
        }
      } catch (e) {
        console.error("Failed to fetch messages", e);
      }
    };
    fetchMessages();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      setError("이름과 메시지를 모두 입력해주세요.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/guestbook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          message: message.trim(),
        }),
      });

      if (response.ok) {
        const updatedMessages = await response.json();
        setMessages(updatedMessages);
        setName("");
        setMessage("");
        setError("");
      } else {
        setError("메시지 저장에 실패했습니다.");
      }
    } catch (e) {
      setError("오류가 발생했습니다.");
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full py-16 px-4 bg-white dark:bg-gray-800" id="guestbook">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-dmserif text-4xl sm:text-5xl text-gray-900 dark:text-white mb-4">
            Guestbook
          </h2>
          <div className="mt-4 w-20 h-0.5 bg-gray-200 dark:bg-gray-700 mx-auto mb-3 rounded" />
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            축하의 메시지를 남겨주세요!
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="max-w-md mx-auto space-y-4 mb-16 relative z-10"
        >
          <div>
            <Input
              type="text"
              placeholder="이름"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-gray-50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700"
            />
          </div>
          <div>
            <textarea
              placeholder="메시지를 남겨주세요"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full px-3 py-2 text-sm rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-300 resize-none"
            />
          </div>
          
          {error && (
            <p className="text-red-500 text-sm text-center font-medium animate-pulse">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-gray-900 font-bold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "등록 중..." : "등록"}
          </button>
        </motion.form>

        <div className="space-y-4 max-w-2xl mx-auto">
          {messages.length === 0 ? (
            <div className="text-center text-gray-500 py-10">
              첫 번째 메시지를 남겨주세요!
            </div>
          ) : (
            messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-rose-500/30 transition-colors"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg">
                    {msg.name}
                  </h3>
                  <span className="text-xs text-gray-400">{msg.date}</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap leading-relaxed">
                  {msg.message}
                </p>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
