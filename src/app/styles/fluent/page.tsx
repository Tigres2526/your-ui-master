'use client'

import React from 'react'
import { Zap, Home, Settings, Download, Upload, ChevronRight, Mail, Calendar, Clock, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function FluentDesignPage() {
  
  return (
    <div className="relative -m-6 p-6 min-h-[calc(100vh-4rem)] bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Page Title */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Fluent Design</h1>
      </div>

      <div className="px-6 py-8 max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <h2 className="text-4xl font-bold">Fluent Design System</h2>
          <p className="text-lg text-muted-foreground">
            Microsoft&apos;s design language focused on light, depth, motion, material, and scale
          </p>
        </div>

        {/* Design Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 border-0 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Depth</h3>
              <p className="text-muted-foreground">
                Z-axis positioning and layering creates hierarchy
              </p>
            </div>
          </Card>
          <Card className="p-6 backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 border-0 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                <Home className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Motion</h3>
              <p className="text-muted-foreground">
                Smooth animations guide user attention
              </p>
            </div>
          </Card>
          <Card className="p-6 backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 border-0 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
                <Settings className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Material</h3>
              <p className="text-muted-foreground">
                Acrylic and transparent materials create depth
              </p>
            </div>
          </Card>
        </div>

        {/* Depth Layers Example */}
        <Card className="p-8 backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 border-0">
          <h3 className="text-2xl font-semibold mb-6">Depth System</h3>
          <div className="relative h-64 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 bg-gray-200 dark:bg-gray-700 rounded-xl shadow-sm flex items-center justify-center">
                Layer 0
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-40 bg-white dark:bg-gray-800 rounded-xl shadow-md flex items-center justify-center transform translate-y-4">
                Layer 1
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center transform translate-y-8">
                Layer 2
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-white dark:bg-gray-800 rounded-xl shadow-xl flex items-center justify-center transform translate-y-12">
                Layer 3
              </div>
            </div>
          </div>
        </Card>

        {/* Acrylic Material */}
        <Card className="overflow-hidden border-0">
          <div className="p-8 backdrop-blur-md bg-white/60 dark:bg-gray-800/60">
            <h3 className="text-2xl font-semibold mb-6">Acrylic Material</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 rounded-xl backdrop-blur-xl bg-white/40 dark:bg-gray-700/40 border border-white/20">
                  <h4 className="font-medium mb-2">In-app Acrylic</h4>
                  <p className="text-sm text-muted-foreground">
                    60% opacity with backdrop blur
                  </p>
                </div>
                <div className="p-4 rounded-xl backdrop-blur-sm bg-white/80 dark:bg-gray-700/80 border border-white/20">
                  <h4 className="font-medium mb-2">Background Acrylic</h4>
                  <p className="text-sm text-muted-foreground">
                    80% opacity with light blur
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <Button className="w-full justify-start backdrop-blur-md bg-blue-500/80 hover:bg-blue-500/90 text-white border-0">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
                <Button className="w-full justify-start backdrop-blur-md bg-white/80 dark:bg-gray-700/80 hover:bg-white/90 dark:hover:bg-gray-700/90 border-0">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Reveal Highlight */}
        <Card className="p-8 backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 border-0">
          <h3 className="text-2xl font-semibold mb-6">Reveal Highlight</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[Mail, Calendar, Clock, User].map((Icon, i) => (
              <button
                key={i}
                className="p-6 rounded-xl bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all hover:shadow-lg group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] duration-700" />
                <Icon className="h-8 w-8 mx-auto" />
              </button>
            ))}
          </div>
        </Card>

        {/* Connected Animations */}
        <Card className="p-8 backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 border-0">
          <h3 className="text-2xl font-semibold mb-6">Navigation Example</h3>
          <Tabs defaultValue="home" className="w-full">
            <TabsList className="grid w-full grid-cols-3 backdrop-blur-md bg-white/60 dark:bg-gray-700/60">
              <TabsTrigger value="home">Home</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="home" className="space-y-4 mt-6">
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 backdrop-blur-sm bg-gray-50/80 dark:bg-gray-700/80 border-0">
                  <h4 className="font-medium">Recent Files</h4>
                  <p className="text-sm text-muted-foreground mt-2">12 items</p>
                </Card>
                <Card className="p-4 backdrop-blur-sm bg-gray-50/80 dark:bg-gray-700/80 border-0">
                  <h4 className="font-medium">Shared</h4>
                  <p className="text-sm text-muted-foreground mt-2">5 items</p>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="documents" className="mt-6">
              <div className="space-y-2">
                {['Document 1.docx', 'Presentation.pptx', 'Spreadsheet.xlsx'].map((doc, i) => (
                  <div key={i} className="p-3 rounded-lg backdrop-blur-sm bg-gray-50/80 dark:bg-gray-700/80 hover:bg-gray-100/80 dark:hover:bg-gray-600/80 transition-colors">
                    {doc}
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="settings" className="mt-6">
              <div className="space-y-4">
                <Input placeholder="Search settings..." className="backdrop-blur-sm bg-white/60 dark:bg-gray-700/60" />
                <div className="space-y-2">
                  {['General', 'Privacy', 'Notifications'].map((setting, i) => (
                    <Button key={i} variant="ghost" className="w-full justify-start">
                      {setting}
                      <ChevronRight className="ml-auto h-4 w-4" />
                    </Button>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  )
}