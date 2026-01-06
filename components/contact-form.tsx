"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(1, "お名前を入力してください"),
  email: z.string().email("有効なメールアドレスを入力してください"),
  subject: z.string().min(1, "件名を入力してください"),
  message: z.string().min(10, "メッセージは10文字以上で入力してください"),
})

type FormData = z.infer<typeof formSchema>

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // ここでフォームデータを処理します
      // 実際のプロジェクトでは、APIエンドポイントに送信します
      console.log("Form data:", data)
      
      // デモ用の遅延
      await new Promise((resolve) => setTimeout(resolve, 1000))
      
      setSubmitStatus("success")
      reset()
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-slate-300">
          お名前 <span className="text-red-400">*</span>
        </label>
        <Input
          id="name"
          {...register("name")}
          placeholder="山田 太郎"
          className="bg-slate-800/50 border-slate-700 focus:border-blue-500"
          aria-invalid={errors.name ? "true" : "false"}
        />
        {errors.name && (
          <p className="text-sm text-red-400" role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-slate-300">
          メールアドレス <span className="text-red-400">*</span>
        </label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          placeholder="example@email.com"
          className="bg-slate-800/50 border-slate-700 focus:border-blue-500"
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && (
          <p className="text-sm text-red-400" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium text-slate-300">
          件名 <span className="text-red-400">*</span>
        </label>
        <Input
          id="subject"
          {...register("subject")}
          placeholder="お問い合わせの件名"
          className="bg-slate-800/50 border-slate-700 focus:border-blue-500"
          aria-invalid={errors.subject ? "true" : "false"}
        />
        {errors.subject && (
          <p className="text-sm text-red-400" role="alert">
            {errors.subject.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-slate-300">
          メッセージ <span className="text-red-400">*</span>
        </label>
        <Textarea
          id="message"
          {...register("message")}
          placeholder="お問い合わせ内容をご記入ください"
          rows={6}
          className="bg-slate-800/50 border-slate-700 focus:border-blue-500 resize-none"
          aria-invalid={errors.message ? "true" : "false"}
        />
        {errors.message && (
          <p className="text-sm text-red-400" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      {submitStatus === "success" && (
        <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
          <p className="text-sm text-green-400">メッセージを送信しました。ありがとうございます！</p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
          <p className="text-sm text-red-400">送信に失敗しました。もう一度お試しください。</p>
        </div>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-6 text-base"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <span className="animate-spin">⏳</span>
            送信中...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <Send className="h-5 w-5" />
            送信する
          </span>
        )}
      </Button>
    </form>
  )
}
