'use client'

import React, { useState } from 'react'
import { 
  NeuCard,
  NeuCardContent,
  NeuButton,
  NeuBadge,
  NeuInput,
  NeuSwitch
} from '@/components/neumorphism'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Bell,
  Shield,
  Eye,
  Heart,
  MessageSquare,
  Settings
} from 'lucide-react'

export function NeumorphismUserProfile() {
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [pushNotifications, setPushNotifications] = useState(false)
  const [profileVisibility, setProfileVisibility] = useState(true)

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Profile Header */}
      <NeuCard className="mb-6">
        <NeuCardContent className="p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#f0f0f0] to-[#cacaca] shadow-[20px_20px_40px_#bebebe,-20px_-20px_40px_#ffffff] flex items-center justify-center">
                <User className="w-16 h-16 text-gray-600" />
              </div>
              <NeuButton 
                size="icon" 
                className="absolute bottom-0 right-0 w-10 h-10 rounded-full"
                variant="primary"
              >
                <Settings className="w-4 h-4" />
              </NeuButton>
            </div>
            
            <div className="text-center md:text-left flex-1">
              <h2 className="text-2xl font-bold text-gray-800">John Doe</h2>
              <p className="text-gray-600 mb-3">Senior Product Designer</p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <NeuBadge>Pro Member</NeuBadge>
                <NeuBadge variant="primary">Verified</NeuBadge>
                <NeuBadge variant="secondary">2+ Years</NeuBadge>
              </div>
            </div>

            <div className="flex gap-3">
              <NeuButton size="sm">
                <MessageSquare className="w-4 h-4 mr-2" />
                Message
              </NeuButton>
              <NeuButton size="sm" variant="primary">
                <Heart className="w-4 h-4 mr-2" />
                Follow
              </NeuButton>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="text-center p-4 rounded-xl bg-[#e0e0e0] shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]">
              <p className="text-2xl font-bold text-gray-800">234</p>
              <p className="text-sm text-gray-600">Projects</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-[#e0e0e0] shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]">
              <p className="text-2xl font-bold text-gray-800">12.3k</p>
              <p className="text-sm text-gray-600">Followers</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-[#e0e0e0] shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]">
              <p className="text-2xl font-bold text-gray-800">4.8</p>
              <p className="text-sm text-gray-600">Rating</p>
            </div>
          </div>
        </NeuCardContent>
      </NeuCard>

      {/* Profile Tabs */}
      <NeuCard>
        <NeuCardContent className="p-6">
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-[#e0e0e0] shadow-[inset_3px_3px_6px_#bebebe,inset_-3px_-3px_6px_#ffffff]">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="mt-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullname">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                    <NeuInput
                      id="fullname"
                      defaultValue="John Doe"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                    <NeuInput
                      id="email"
                      type="email"
                      defaultValue="john@example.com"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                    <NeuInput
                      id="phone"
                      defaultValue="+1 (555) 123-4567"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                    <NeuInput
                      id="location"
                      defaultValue="San Francisco, CA"
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <NeuInput
                  id="bio"
                  defaultValue="Passionate about creating beautiful and functional designs that make a difference."
                  className="min-h-[100px] py-3"
                />
              </div>

              <div className="flex justify-end gap-3">
                <NeuButton variant="ghost">Cancel</NeuButton>
                <NeuButton variant="primary">Save Changes</NeuButton>
              </div>
            </TabsContent>

            <TabsContent value="settings" className="mt-6 space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <Bell className="w-5 h-5" />
                  Notifications
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-[#e0e0e0] shadow-[inset_3px_3px_6px_#bebebe,inset_-3px_-3px_6px_#ffffff]">
                    <div>
                      <p className="font-medium text-gray-800">Email Notifications</p>
                      <p className="text-sm text-gray-600">Receive notifications via email</p>
                    </div>
                    <NeuSwitch
                      checked={emailNotifications}
                      onCheckedChange={setEmailNotifications}
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl bg-[#e0e0e0] shadow-[inset_3px_3px_6px_#bebebe,inset_-3px_-3px_6px_#ffffff]">
                    <div>
                      <p className="font-medium text-gray-800">Push Notifications</p>
                      <p className="text-sm text-gray-600">Receive push notifications</p>
                    </div>
                    <NeuSwitch
                      checked={pushNotifications}
                      onCheckedChange={setPushNotifications}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Privacy
                </h3>
                
                <div className="flex items-center justify-between p-4 rounded-xl bg-[#e0e0e0] shadow-[inset_3px_3px_6px_#bebebe,inset_-3px_-3px_6px_#ffffff]">
                  <div>
                    <p className="font-medium text-gray-800">Profile Visibility</p>
                    <p className="text-sm text-gray-600">Make your profile visible to others</p>
                  </div>
                  <NeuSwitch
                    checked={profileVisibility}
                    onCheckedChange={setProfileVisibility}
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="activity" className="mt-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Recent Activity
                </h3>

                <div className="space-y-3">
                  {[
                    { action: 'Completed project "Dashboard Redesign"', time: '2 hours ago' },
                    { action: 'Added 3 new team members', time: '5 hours ago' },
                    { action: 'Updated profile information', time: '1 day ago' },
                    { action: 'Published new design system', time: '3 days ago' }
                  ].map((activity, index) => (
                    <div 
                      key={index}
                      className="p-4 rounded-xl bg-[#e0e0e0] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] flex items-center justify-between"
                    >
                      <div>
                        <p className="font-medium text-gray-800">{activity.action}</p>
                        <p className="text-sm text-gray-600">{activity.time}</p>
                      </div>
                      <Eye className="w-4 h-4 text-gray-500" />
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </NeuCardContent>
      </NeuCard>
    </div>
  )
}