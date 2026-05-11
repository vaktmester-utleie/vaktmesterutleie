'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '../ui/button'
import { Calendar } from '../ui/calendar'
import { Field, FieldGroup, FieldLabel } from '../ui/field'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Textarea } from '../ui/textarea'
import FormInput from './form-input'
import { useSearchParams } from 'next/navigation'

const schema = z.object({
  name: z.string().min(1, 'Namn er påkravd'),
  telephone: z.string().min(8, 'Telefon er påkravd'),
  email: z.email('Ugyldig e-post').optional().or(z.literal('')),
  rental: z.string().min(1, 'Utstyr er påkravd'),
  message: z.string().optional(),
})

type Schema = z.infer<typeof schema>

export default function RentalForm() {
  const [fromDate, setFromDate] = useState<Date>()
  const [toDate, setToDate] = useState<Date>()
  const params = useSearchParams()
  const key = params.get('utstyr')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      rental: key ? key : '',
    },
  })

  const onSubmit: SubmitHandler<Schema> = (data) =>
    console.log({ ...data, fromDate, toDate })

  return (
    <form
      className="max-w-4xl flex flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FieldGroup className="flex flex-row gap-4">
        <FormInput
          placeholder="Ditt fulle namn"
          label="Namn*"
          htmlFor="name"
          {...register('name')}
          error={errors.name?.message}
        />
        <FormInput
          placeholder="+47 ..."
          label="Telefon*"
          htmlFor="telephone"
          {...register('telephone')}
          error={errors.telephone?.message}
        />
      </FieldGroup>

      <FormInput
        type="email"
        htmlFor="email"
        label="E-post"
        placeholder="din@epost.no"
        {...register('email')}
        error={errors.email?.message}
      />

      <FormInput
        type="text"
        htmlFor="rental"
        label="Kva utstyr vil du leige?*"
        placeholder="T.d. tilhengar, stillas, stige..."
        {...register('rental')}
        error={errors.rental?.message}
      />

      <FieldGroup className="flex flex-row gap-4">
        <Field className="flex flex-col gap-1 flex-1">
          <FieldLabel>Frå dato</FieldLabel>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="justify-start font-normal text-left"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {fromDate ? format(fromDate, 'dd.MM.yyyy') : 'dd/mm/yyyy'}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={fromDate}
                onSelect={setFromDate}
              />
            </PopoverContent>
          </Popover>
        </Field>

        <Field className="flex flex-col gap-1 flex-1">
          <FieldLabel>Til dato</FieldLabel>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="justify-start font-normal text-left"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {toDate ? format(toDate, 'dd.MM.yyyy') : 'dd/mm/yyyy'}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={toDate} onSelect={setToDate} />
            </PopoverContent>
          </Popover>
        </Field>
      </FieldGroup>

      <Field>
        <FieldLabel htmlFor="message">Melding</FieldLabel>
        <Textarea
          placeholder="Noko meir me bør vite?"
          {...register('message')}
        />
      </Field>

      <button type="submit" className="btn-primary py-3">
        Send utleigeførespurnad →
      </button>
    </form>
  )
}
