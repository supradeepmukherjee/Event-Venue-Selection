import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Form, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./components/ui/button";
import { FormControl, FormField, FormItem, FormMessage } from "./components/ui/form";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";

const venues = [
  {
    name: 'The Grand Ballroom',
    area: 'Downtown',
    landmark: 'City Center Mall',
    station: 'Central Station',
    distanceStn: 0.5,
    bus: 'Bus Stop A',
    distanceBus: '200 meters',
    city: 'Kearny',
    capacity: '500',
    lift: 'Yes',
    parking: 'Available',
    startingPrice: 'Rs.2000',
    availability: 'Available for booking',
    rating: '4.8'
  },
  {
    name: 'Riverside Conference Hall',
    area: 'Riverside Park',
    landmark: 'Riverside Cafe',
    station: 'East Kearny Station',
    distanceStn: 1.2,
    bus: 'Bus Stop B',
    distanceBus: '150 meters',
    city: 'Kearny',
    capacity: '300',
    lift: 'No',
    parking: 'Street parking only',
    startingPrice: 'Rs.1500',
    availability: 'Fully booked for March 2025',
    rating: '4.5'
  },
  {
    name: 'Skyline Event Space',
    area: 'Uptown Kearny',
    landmark: 'Kearny Plaza',
    station: 'West Kearny Station',
    distanceStn: 0.8,
    bus: 'Bus Stop C',
    distanceBus: '100 meters',
    city: 'Kearny',
    capacity: '400',
    lift: 'Yes',
    parking: 'Valet service available',
    startingPrice: 'Rs.2500',
    availability: 'Available for weekends only',
    rating: '4.9'
  },
  {
    name: 'Kearny Community Hall',
    area: 'Central Kearny',
    landmark: 'Kearny Library',
    station: 'Main Street Station',
    distanceStn: 0.3,
    bus: 'Bus Stop D',
    distanceBus: '50 meters',
    city: 'Kearny',
    capacity: '200',
    lift: 'Yes',
    parking: 'Limited spaces available',
    startingPrice: 'Rs.800',
    availability: 'Available on weekdays only',
    rating: '4.2'
  },
  {
    name: 'The Heritage Venue',
    area: 'Historic District',
    landmark: 'Old Town Square',
    station: 'Heritage Station',
    distanceStn: 1.5,
    bus: 'Bus Stop E',
    distanceBus: '300 meters',
    city: 'Kearny',
    capacity: '600',
    lift: 'Yes',
    parking: 'On-site parking available for guests',
    startingPrice: 'Rs.3000',
    availability: 'Available year-round, inquire for specific dates.',
    rating: '4.7'
  }
];


function App() {
  const [venue, setVenue] = useState(0)
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to EventSpark
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Select your venue from the dropdown and then get to know the details of the venue
      </p>
      <div className="mt-10 w-full flex justify-center">
        <select
          value={venues[venue].name}
          onChange={e => setVenue(Number(e.target.value))}
          className='p-2 border-black border rounded-md'
        >
          {venues.map((v, i) => <option value={i}>{v.name}, {v.city}</option>)}
        </select>
      </div>
      <form className="my-8" >
        <LabelInputContainer className="mb-4">
          <Label>Name</Label>
          <Input type="text" placeholder={venues[venue].name} disabled />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label>Area</Label>
          <Input type="text" placeholder={venues[venue].area} disabled />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label>Landmark</Label>
          <Input type="text" placeholder={venues[venue].landmark} disabled />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label>Nearest Railway Station</Label>
          <Input type="text" placeholder={venues[venue].station} disabled />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label>Distance from nearest railway Station</Label>
          <Input type="text" placeholder={String(venues[venue].distanceStn) + `km`} disabled />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label>Nearest Bus Stop</Label>
          <Input type="text" placeholder={venues[venue].bus} disabled />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label>Distance from Nearest Bus Stop</Label>
          <Input type="text" placeholder={venues[venue].distanceBus} disabled />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label>City</Label>
          <Input type="text" placeholder={venues[venue].city} disabled />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label>Capacity</Label>
          <Input type="text" placeholder={venues[venue].capacity} disabled />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label>Lift</Label>
          <Input type="text" placeholder={venues[venue].lift} disabled />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label>Parking</Label>
          <Input type="text" placeholder={venues[venue].parking} disabled />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label>Starting Price</Label>
          <Input type="text" placeholder={venues[venue].startingPrice} disabled />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label>Availability</Label>
          <Input type="text" placeholder={venues[venue].availability} disabled />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label>Rating</Label>
          <Input type="text" placeholder={venues[venue].rating} disabled />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Confirm Venue &rarr;
        </button>
      </form>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
export default App