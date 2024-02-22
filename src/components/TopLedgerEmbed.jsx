import React from 'react'

export const TopLedgerEmbed = ({
  title,
  caption,
  client,
  queryId,
  visualizationId,
  apiKey,
  height,
  width,
  params = {},
}) => {

  const embedUrl = new URL(`https://analytics.topledger.xyz/${client}/embed/query/${queryId}/visualization/${visualizationId}`)
  embedUrl.search = new URLSearchParams({ api_key: apiKey, hide_header: 'true', hide_timestamp: 'true', iframe: 'true', ...params }).toString()

  return (
    <figure
        className='bg-[#f5f7fd] rounded-xl my-4 p-2 px-4 m-0 w-full flex items-center justify-center flex-col'
    >
      {title && <p className='flex justify-center text-black text-lg leading-relaxed font-normal'>{title}</p>}
      <iframe
        src={embedUrl.toString()}
        className='min-h-96 mx-auto my-2 w-full'
      ></iframe>
      {caption && <figcaption className='flex justify-center bg-white text-[rgb(64,68,79)] text-sm font-medium py-1 px-4 rounded-full mt-0'>{caption}</figcaption>}
    </figure>
  )
}
