type BlogBannerProps = {
  title: string;
  description: string;
};

export function BlogBanner({ title, description }: BlogBannerProps) {
  return (
    <div className='relative z-2 mb-4 aspect-[3.2] overflow-hidden rounded-2xl border p-8 md:p-12'>
      <div className='absolute inset-0 -z-1 bg-linear-to-br from-fd-primary/15 via-fd-muted/50 to-fd-background' />
      <h1 className='mb-4 text-3xl font-medium'>{title}</h1>
      <p className='text-sm text-fd-muted-foreground'>{description}</p>
    </div>
  );
}
