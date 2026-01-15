"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import CoilManager from "@/components/ctl/coil-manager"
import OrderManager from "@/components/ctl/order-manager"
import LineManager from "@/components/ctl/line-manager"
import OptimizationEngine from "@/components/ctl/optimization-engine"
import Dashboard from "@/components/ctl/dashboard"
import RMForecasting from "@/components/ctl/rm-forecasting"
import { CTLProvider } from "@/components/ctl/ctl-context"

export default function Home() {
  const [activeTab, setActiveTab] = useState("setup")

  return (
    <CTLProvider>
      <div className="min-h-screen flex flex-col bg-background">
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-1 container mx-auto px-4 py-6">
          {activeTab === "setup" && (
            <div className="rounded-lg border border-border bg-card p-6">
              <h2 className="mb-4 text-xl font-semibold text-primary">
                Welcome to CTL Optimization
              </h2>
              <div className="space-y-4 text-sm text-muted-foreground">
                <p>
                  This system optimizes the assignment of hot-rolled coils (RM
                  stock) to CTL lines while fulfilling sales orders with
                  minimum scrap.
                </p>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">
                    Getting Started:
                  </h3>
                  <ol className="list-inside list-decimal space-y-1">
                    <li>Define your CTL lines and their specifications</li>
                    <li>Add available coils (raw material inventory)</li>
                    <li>Input sales orders (sheet requirements)</li>
                    <li>Run the optimization engine</li>
                    <li>Review assignments and scrap analysis</li>
                    <li>
                      Check Forecasting tab for recommended RM purchases
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          )}
          {activeTab === "coils" && <CoilManager />}
          {activeTab === "orders" && <OrderManager />}
          {activeTab === "lines" && <LineManager />}
          {activeTab === "optimize" && <OptimizationEngine />}
          {activeTab === "results" && <Dashboard />}
          {activeTab === "forecasting" && <RMForecasting />}
        </main>
        <div className="container mx-auto px-4 pb-4">
          <Footer />
        </div>
      </div>
    </CTLProvider>
  );
}
