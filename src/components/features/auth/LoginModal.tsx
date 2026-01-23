"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useAuth } from "@/lib/context/AuthContext";
import styles from "./LoginModal.module.scss";

import { Eye, EyeOff } from "lucide-react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const { login } = useAuth();
  const { update } = useSession();
  const [step, setStep] = useState<"login" | "change-password">("login");

  // Login State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Change Password State
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const result = await login(email, password);
      console.log("Login Result:", result);
      if (result?.mustChangePassword) {
        console.log("Switching to change-password");
        setStep("change-password");
      } else {
        onClose();
      }
    } catch (err: any) {
      if (err.message?.includes("CredentialsSignin")) {
        setError("Неверный email или пароль");
      } else {
        setError(err.message || "Ошибка входа");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handlePasswordChangeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (newPassword.length < 6) {
      setError("Пароль должен быть не менее 6 символов");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Пароли не совпадают");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/auth/change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ newPassword }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Ошибка обновления пароля");
      }

      // Force refresh to update session and move to dashboard
      const updatedSession = await update();
      if (updatedSession?.user?.role === "admin") {
        window.location.href = "/admin";
      } else {
        window.location.href = "/dashboard";
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={onClose}>
          &times;
        </button>

        {step === "login" ? (
          <>
            <h2>Идентификация</h2>

            <form onSubmit={handleLoginSubmit} className={styles.form}>
              <div className={styles.group}>
                <label>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                />
              </div>

              <div className={styles.group}>
                <label>Пароль</label>
                <div className={styles.passwordWrapper}>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className={styles.toggleButton}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {error && <div className={styles.error}>{error}</div>}

              <button
                type="submit"
                className={styles.submit}
                disabled={isLoading}
              >
                {isLoading ? "Авторизация..." : "Войти в систему"}
              </button>
            </form>
          </>
        ) : (
          <>
            <h2>Смена Пароля</h2>
            <p className={styles.hint}>
              Для безопасности вашего аккаунта необходимо сменить пароль при
              первом входе.
            </p>

            <form onSubmit={handlePasswordChangeSubmit} className={styles.form}>
              <div className={styles.group}>
                <label>Новый Пароль</label>
                <div className={styles.passwordWrapper}>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className={styles.toggleButton}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className={styles.group}>
                <label>Подтвердите Пароль</label>
                <div className={styles.passwordWrapper}>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className={styles.toggleButton}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {error && <div className={styles.error}>{error}</div>}

              <button
                type="submit"
                className={styles.submit}
                disabled={isLoading}
              >
                {isLoading ? "Обновление..." : "Сменить Пароль"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
